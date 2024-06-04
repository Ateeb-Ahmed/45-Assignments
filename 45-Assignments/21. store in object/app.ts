let obj = {
    name: "Ateeb",
    age: 24,
    cell: 9012839023,
    Skills: ["Teaching", "Content Writing"],
    Education: () => {
      return "BS-English";
    },
  };
  console.log("Name:", obj.name )
  console.log("Age:", obj.age)
  console.log("Skills:", obj.Skills[0])
  console.log("Education:", obj.Education())