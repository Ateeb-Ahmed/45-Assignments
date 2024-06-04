var obj = {
    name: "Ateeb",
    age: 24,
    cell: 9012839023,
    Skills: ["Teaching", "Content Writing"],
    Education: function () {
        return "BS-English";
    },
};
console.log("name:", obj.name);
console.log("age:", obj.age);
console.log("Skills:", obj.Skills[0]);
console.log("Education:", obj.Education());
