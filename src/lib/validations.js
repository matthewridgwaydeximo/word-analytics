export const warnings = [
    {
        condition: /<script>/i,
        text: "No script tags allowed",
        action: (value) => value.replace("<script>", ""),
    },
    {
        condition: /@/,
        text: "No special symbols allowed",
        action: (value) => value.replace("@", ""), // Assuming you might fill in a correct action later
    },
];
