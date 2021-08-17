const ruleSchema =
{
    "id": "https://cdisc.org/rules/1-0",

    "$defs": {
        "Classes": {
            "type": "array",
            "items": {
                "type": "string",
                "enum": ["All", "Events", "Findings", "Findings About", "General Observations", "Interventions", "Relationship", "Special-Purpose", "Study Reference", "Trial Design"]
            }
        },
        "Domains": {
            "type": "array",
            "items": {
                "type": "string",
                "pattern": "^(All|[A-Z]{2})$"
            }
        }
    },

    "type": "object",
    "additionalProperties": false,
    "description": "Validation schema CDISC Rules 1.0",
    "required": ["CoreId", "Version", "Authority", "Reference", "Description", "Sensitivity", "Scopes", "Rule Type", "Outcome", "Citations"],
    "properties": {
        "CoreId": {
            "type": "string"
        },
        "Version": {
            "type": "string",
            "enum": ["1"]
        },
        "Authority": {
            "type": "object",
            "additionalProperties": false,
            "required": ["Organization"],
            "properties": {
                "Organization": {
                    "type": "string",
                    "enum": ["CDISC"]
                }
            }
        },
        "Reference": {
            "type": "object",
            "additionalProperties": false,
            "required": ["Origin", "Version", "Id"],
            "properties": {
                "Origin": { "type": "string" },
                "Version": { "type": "string" },
                "Id": { "type": "string" }
            }
        },
        "Description": {
            "type": "string"
        },
        "Sensitivity": {
            "type": "string",
            "enum": ["Study", "Class", "Domain", "Dataset", "Variable", "Code_list", "Term", "Record", "Value"]
        },
        "Scopes": {
            "type": "object",
            "additionalProperties": false,
            "required": ["Standards", "Classes", "Domains"],
            "properties": {
                "Standards": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "additionalProperties": false,
                        "required": ["Name", "Version"],
                        "properties": {
                            "Name": { "type": "string" },
                            "Version": { "type": "string" }
                        }
                    }
                },
                "Classes": {
                    "oneOf": [
                        {
                            "type": "object",
                            "additionalProperties": false,
                            "required": ["Include"],
                            "properties": {
                                "Include": { "$ref": "#/$defs/Classes" }
                            }
                        },
                        {
                            "type": "object",
                            "additionalProperties": false,
                            "required": ["Exclude"],
                            "properties": {
                                "Exclude": { "$ref": "#/$defs/Classes" }
                            }
                        }
                    ]
                },
                "Domains": {
                    "oneOf": [
                        {
                            "type": "object",
                            "additionalProperties": false,
                            "required": ["Include"],
                            "properties": {
                                "Include": { "$ref": "#/$defs/Domains" }
                            }
                        },
                        {
                            "type": "object",
                            "additionalProperties": false,
                            "required": ["Exclude"],
                            "properties": {
                                "Exclude": { "$ref": "#/$defs/Domains" }
                            }
                        }
                    ]
                },
            }
        },
        "Rule Type": {
            "oneOf": [
                {
                    "type": "object",
                    "additionalProperties": false,
                    "required": ["Value Presence"],
                    "properties": {
                        "Value Presence": {
                            "type": "object",
                            "additionalProperties": false,
                            "required": ["Check"],
                            "properties": {
                                "Check": { "type": "string" }
                            }
                        }
                    }
                },
                {
                    "type": "object",
                    "additionalProperties": false,
                    "required": ["Variable Presence"],
                    "properties": {
                        "Variable Presence": {
                            "type": "object",
                            "additionalProperties": false,
                            "required": ["Check"],
                            "properties": {
                                "Check": { "type": "string" }
                            }
                        }
                    }
                },
                {
                    "type": "object",
                    "additionalProperties": false,
                    "required": ["Data pattern and format"],
                    "properties": {
                        "Data pattern and format": {
                            "type": "object",
                            "additionalProperties": false,
                            "required": ["Check"],
                            "properties": {
                                "Check": { "type": "string" }
                            }
                        }
                    }
                },
                {
                    "type": "object",
                    "additionalProperties": false,
                    "required": ["Value domain"],
                    "properties": {
                        "Value domain": {
                            "type": "object",
                            "additionalProperties": false,
                            "required": ["Check"],
                            "properties": {
                                "Check": { "type": "string" }
                            }
                        }
                    }
                },
                {
                    "type": "object",
                    "additionalProperties": false,
                    "required": ["External dictionaries"],
                    "properties": {
                        "External dictionaries": {
                            "type": "object",
                            "additionalProperties": false,
                            "required": ["Check"],
                            "properties": {
                                "Check": { "type": "string" }
                            }
                        }
                    }
                },
                {
                    "type": "object",
                    "additionalProperties": false,
                    "required": ["Referential integrity"],
                    "properties": {
                        "Referential integrity": {
                            "type": "object",
                            "additionalProperties": false,
                            "required": ["Check"],
                            "properties": {
                                "Check": { "type": "string" }
                            }
                        }
                    }
                },
                {
                    "type": "object",
                    "additionalProperties": false,
                    "required": ["Metadata"],
                    "properties": {
                        "Metadata": {
                            "type": "object",
                            "additionalProperties": false,
                            "required": ["Check"],
                            "properties": {
                                "Check": { "type": "string" }
                            }
                        }
                    }
                },
                {
                    "type": "object",
                    "additionalProperties": false,
                    "required": ["Consistency"],
                    "properties": {
                        "Consistency": {
                            "type": "object",
                            "additionalProperties": false,
                            "required": ["Check"],
                            "properties": {
                                "Check": { "type": "string" }
                            }
                        }
                    }
                },
                {
                    "type": "object",
                    "additionalProperties": false,
                    "required": ["Range and limit"],
                    "properties": {
                        "Range and limit": {
                            "type": "object",
                            "additionalProperties": false,
                            "required": ["Check"],
                            "properties": {
                                "Check": { "type": "string" }
                            }
                        }
                    }
                },
                {
                    "type": "object",
                    "additionalProperties": false,
                    "required": ["Date/time arithmetic"],
                    "properties": {
                        "Date/time arithmetic": {
                            "type": "object",
                            "additionalProperties": false,
                            "required": ["Check"],
                            "properties": {
                                "Check": { "type": "string" }
                            }
                        }
                    }
                },
                {
                    "type": "object",
                    "additionalProperties": false,
                    "required": ["Data domain aggregation"],
                    "properties": {
                        "Data domain aggregation": {
                            "type": "object",
                            "additionalProperties": false,
                            "required": ["Check", "Aggregation", "Group By"],
                            "properties": {
                                "Check": { "type": "string" },
                                "Aggregation": { "type": "string" },
                                "Group By": { "type": "string" }
                            }
                        }
                    }
                },
                {
                    "type": "object",
                    "additionalProperties": false,
                    "required": ["Dataset property"],
                    "properties": {
                        "Dataset property": {
                            "type": "object",
                            "additionalProperties": false,
                            "required": ["Check"],
                            "properties": {
                                "Check": { "type": "string" }
                            }
                        }
                    }
                },
            ]
        },
        "Outcome": {
            "type": "object",
            "additionalProperties": false,
            "required": ["Message"],
            "properties": {
                "Message": { "type": "string" }
            }
        },
        "Citations": {
            "type": "array",
            "items": {
                "type": "object",
                "additionalProperties": false,
                "required": ["Document", "Section", "Cited Guidance"],
                "properties": {
                    "Document": { "type": "string" },
                    "Section": { "type": "string" },
                    "Cited Guidance": { "type": "string" }
                }
            }
        }
    }
};

const rule1 = `
CoreId: Rule271828
Version: "1"
Authority:
    Organization: CDISC
Reference:
    Origin: SDTM Conformance Rules
    Version: "1.1"
    Id: CG0082
Description: Verify...
Sensitivity: Record
Scopes:
    Standards:
    - Name: SDTMIG
      Version: "3.3"
    - Name: SDTMIG
      Version: "3.4"
    Classes:
        Include:
        - Events
        - Findings
    Domains:
        Include:
        - All
Rule Type:
    Value Presence:
        Conditions: --BODSYS IS NULL
        Check: --BDSYCD IS NOT NULL
Outcome:
    Message: --BDSYCD is populated when --BODSYS is null
Citations:
    - Document: SDTM v1.4
      Section: 2.2.2
      Cited Guidance: Variable Qualifier of --BODSYS
`;

const rule2 = `
CoreId: Rule2
Version: 1
Authority:
    Organization: CDISC
Reference:
    Origin: SDTM Conformance Rules
    Version: 1.1
    Id: CG0082
Description: Verify...
Sensitivity: Record
Scopes:
    Standards:
    - Name: SDTMIG
        Version: 3.3
    - Name: SDTMIG
        Version: 3.4
    Classes:
    Include:
        - Events
        - Findings
    Domains:
Rule Type:
    Value Presence:
    Conditions: --BODSYS IS NULL
    Check: --BDSYCD IS NOT NULL
Outcome:
    Message: --BDSYCD is populated when --BODSYS is null
Citations:
    - Document: SDTM v1.4
    Section: 2.2.2
    Cited Guidance: Variable Qualifier of --BODSYS
`;

const rule3 = `
CoreId: Rule3
Version: 1
Authority:
    Organization: CDISC
Reference:
    Origin: SDTM Conformance Rules
    Version: 1.1
    Id: CG0082
Description: Verify...
Sensitivity: Record
Scopes:
    Standards:
    - Name: SDTMIG
        Version: 3.3
    - Name: SDTMIG
        Version: 3.4
    Classes:
    Include:
        - Events
        - Findings
    Domains:
Rule Type:
    Value Presence:
    Conditions: --BODSYS IS NULL
    Check: --BDSYCD IS NOT NULL
Outcome:
    Message: --BDSYCD is populated when --BODSYS is null
Citations:
    - Document: SDTM v1.4
    Section: 2.2.2
    Cited Guidance: Variable Qualifier of --BODSYS
`;

const testRules = {
    "rule1.yaml": {
        name: "rule1.yaml",
        value: rule1
    },
    "rule2.yaml": {
        name: "rule2.yaml",
        value: rule2
    },
    "rule3.yaml": {
        name: "rule3.yaml",
        value: rule3
    },
};

export { testRules, ruleSchema };






