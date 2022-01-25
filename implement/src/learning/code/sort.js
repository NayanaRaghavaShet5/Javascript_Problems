const data = {
    "data": {
        "columns": [
            {
                "column_name": "C14_Council",
                "attribute_type": "dimension",
                "sub_type": "location",
                "data_type": "String",
                "ontology": true,
                "ontology_values": true,
                "unique_values": 6,
                "action": "deleted"
            },
            {
                "column_name": "C01_Region",
                "unique_values": 6,
                "sub_type": "default",
                "ontology_values": true,
                "data_type": "string",
                "attribute_type": "dimension",
                "ontology": true,
            },
            {
                "column_name": "C02_Region",
                "unique_values": 6,
                "sub_type": "default",
                "ontology_values": true,
                "data_type": "string",
                "field_type": "dimension",
                "ontology": true,
                "action": "added"
            },
            {
                "column_name": "C03_Region",
                "unique_values": 6,
                "sub_type": "default",
                "ontology_values": true,
                "data_type": "string",
                "field_type": "dimension",
                "ontology": true,
                "action": "updated"
            }
        ]
    }
}
const tableData = [
  
];

const data = [
    'DATA'= {completed:true},

]

const groupBy = ['deleted'];

function categorizeDataByAction(data) {
    data.data.columns.map((item, index) => {
        let groupByIndex = groupBy.indexOf(item.action);
     let groupName = 'default';
        if(groupByIndex !== -1){
            groupName = groupBy[groupByIndex];
        }
        
        let tableDataIndex = customFilter(tableData, groupName, 'group');

            if (tableDataIndex === -1) {
                    tableData.push({
                        "group": groupName,
                        "groupval": [],
                        "groupTitle": camelCase(groupName)
                    })
                tableDataIndex = tableData.length-1;
            } 
            tableData[tableDataIndex].groupval = [...tableData[tableDataIndex].groupval, item];
    });
    console.log('answer',JSON.stringify(tableData));
}

function camelCase(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function customFilter(input, element, fieldName) {
    for (let i = 0; i < input.length; i++) {
        if (input[i][fieldName] === element) {
            return i;
        }
    }
    return -1;
}

categorizeDataByAction(data);