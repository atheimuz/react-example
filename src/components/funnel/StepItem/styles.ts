export const wrapper = {};

export const icon = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "40px",
    height: "40px",
    fontSize: "20px",
};

export const step = {
    display: "flex",
    alignItems: "center",
    padding: "20px 0",
};

export const textBox = {
    flex: 1,
    paddingLeft: "10px",
};

export const stepTitle = {
    fontWeight: "bold",
};

export const stepValue = ({ color, active }: { active: boolean }) => ({
    color: active ? "black" : color.gray3,
});

export const arrowIcon = ({ color }) => ({
    color: color.gray1,
});
