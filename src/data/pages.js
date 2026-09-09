import { data } from "./data";

const presetColors = [
    "#3a2927",
    "#c8b28c",
    "#0A2947",
];

const colors = presetColors[Math.floor(Math.random() * presetColors.length)]

const contentPages = data.map((item, index) => ({
    id: index,
    projectname: item.projectname,
    description: item.description,
    link: item.link,
    color: presetColors[index % presetColors.length]
}));

const pages = [
    {
        id: "cover",
        type: "cover",
        title: "Alex Ma - Portfolio",
        subtitle: "Statistical and data analysis projects using R, Python and Machine Learning; financial analysis using Google Sheets.",
    },
    ...contentPages
];

pages.push({
    id: "end",
    type: "end",
    maintitle: "Thank you for your attention.",
    contact: "Email: alexalternative710@gmail.com",
    color: presetColors[contentPages.length % presetColors.length]
});

export default pages;