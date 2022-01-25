let data = {"data":{"config":0,"ontology":16,"metadata":2},
"user":"dilsha.m@lntinfotech.com"};

const result = (data) => {
  const value = Object.values(data.data);
 const sum = value.reduce((first,second) => {
      return first+second;
  }, 0)
  console.log('value', sum);
}

result(data);