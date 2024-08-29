export const field = {
    marginBottom: "12px",
};

export const box = {
    width: "10px",
    height: "10px",
    backgroundColor: "blue",
};

export const listItem = ({ color }) => ({
    borderBottom: `1px solid ${color.gray1}`,

    "&:last-child": {
        borderBottom: "none",
    },
});
