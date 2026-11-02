# Builds a simple real-size demo chair (metres, base at floor) and exports it as GLB.
# Run: blender --background --factory-startup --python make_demo.py -- <out.glb>
import sys, math
import bpy

out = sys.argv[sys.argv.index("--") + 1]

bpy.ops.wm.read_factory_settings(use_empty=True)
scene = bpy.context.scene
scene.unit_settings.system = 'METRIC'
scene.unit_settings.scale_length = 1.0

def mat(name, rgb, rough):
    m = bpy.data.materials.new(name)
    m.use_nodes = True
    p = m.node_tree.nodes["Principled BSDF"]
    p.inputs["Base Color"].default_value = (*rgb, 1)
    p.inputs["Roughness"].default_value = rough
    return m

def srgb(h):
    h = h.lstrip('#')
    c = [int(h[i:i + 2], 16) / 255 for i in (0, 2, 4)]
    return tuple(((v + 0.055) / 1.055) ** 2.4 if v > 0.04045 else v / 12.92 for v in c)

wood = mat("Oak", srgb("#B07A45"), 0.55)
red = mat("Cushion", srgb("#BE1F24"), 0.8)

def box(name, size, loc, material, bevel=0.008):
    bpy.ops.mesh.primitive_cube_add(size=1, location=loc)
    o = bpy.context.active_object
    o.name = name
    o.scale = size
    bpy.ops.object.transform_apply(scale=True)
    m = o.modifiers.new("Bevel", 'BEVEL')
    m.width = bevel
    m.segments = 3
    m.limit_method = 'ANGLE'
    o.data.materials.append(material)
    return o

def leg(name, x, y, h, material):
    bpy.ops.mesh.primitive_cylinder_add(vertices=24, radius=0.018, depth=h, location=(x, y, h / 2))
    o = bpy.context.active_object
    o.name = name
    o.data.materials.append(material)
    return o

W, D, SEAT = 0.46, 0.44, 0.45           # width, depth, seat height
parts = []
parts.append(box("Seat", (W, D, 0.035), (0, 0, SEAT - 0.0175), wood))
for i, (x, y) in enumerate([(-1, -1), (1, -1), (-1, 1), (1, 1)]):
    parts.append(leg(f"Leg{i}", x * (W / 2 - 0.035), y * (D / 2 - 0.035), SEAT - 0.035, wood))
# Back posts rise from the rear legs, plus two back rails.
for i, x in enumerate((-1, 1)):
    parts.append(box(f"BackPost{i}", (0.03, 0.03, 0.42), (x * (W / 2 - 0.035), D / 2 - 0.035, SEAT + 0.21), wood, 0.006))
parts.append(box("BackRailTop", (W - 0.04, 0.025, 0.09), (0, D / 2 - 0.035, SEAT + 0.37), wood))
parts.append(box("BackRailLow", (W - 0.04, 0.02, 0.04), (0, D / 2 - 0.035, SEAT + 0.17), wood, 0.005))
# Stretchers between the legs.
for i, y in enumerate((-1, 1)):
    parts.append(box(f"Stretcher{i}", (W - 0.07, 0.016, 0.016), (0, y * (D / 2 - 0.035), 0.16), wood, 0.004))
# Red cushion.
parts.append(box("Cushion", (W - 0.06, D - 0.07, 0.05), (0, -0.01, SEAT + 0.025), red, 0.02))

for o in parts:
    o.select_set(True)
    bpy.context.view_layer.objects.active = o
    try:
        bpy.ops.object.shade_auto_smooth(angle=math.radians(40))
    except Exception:
        bpy.ops.object.shade_smooth()

bpy.ops.object.select_all(action='SELECT')
bpy.ops.export_scene.gltf(
    filepath=out, export_format='GLB', export_apply=True, use_selection=False,
    export_yup=True, export_materials='EXPORT',
)
print("EXPORTED", out)
