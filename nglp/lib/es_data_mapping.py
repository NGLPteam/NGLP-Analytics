""" Create mappings from models """

def apply_mapping_opts(field_name, path, spec, mapping_opts):
    dot_path = '.'.join(path + (field_name,))
    if dot_path in mapping_opts.get('exceptions', {}):
        return mapping_opts['exceptions'][dot_path]
    elif spec['coerce'] in mapping_opts['coerces']:
        return mapping_opts['coerces'][spec['coerce']]
    else:
        # We have found a data type in the struct we don't have a map for to ES type.
        raise Exception("Mapping error - no mapping found for {}".format(spec['coerce']))


def create_mapping(struct, mapping_opts, path=()):
    result = {"properties": {}}

    for field, spec in struct.get("fields", {}).items():
        result["properties"][field] = apply_mapping_opts(field, path, spec, mapping_opts)

    for field, spec in struct.get("lists", {}).items():
        if "coerce" in spec:
            result["properties"][field] = apply_mapping_opts(field, path, spec, mapping_opts)

    for struct_name, struct_body in struct.get("structs", {}).items():
        dot_path = '.'.join(path + (struct_name,))
        if dot_path in mapping_opts.get("exceptions", {}):
            result["properties"][struct_name] = mapping_opts["exceptions"][dot_path]
        else:
            result["properties"][struct_name] = create_mapping(struct_body, mapping_opts, path + (struct_name,))

    return result
