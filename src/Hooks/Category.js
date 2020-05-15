export const categoryObj = {
    food : "",
    makeup : "",
    clothing : "",
    book : "",
    devices : "",
    etc : "",
};

export const categoryState = {
    food : false,
    makeup : false,
    clothing : false,
    book : false,
    devices : false,
    etc : false,
};

export const categoryArray = [
    "food",
    "makeup",
    "clothing",
    "book",
    "devices",
    "etc"
];

export const categoryTab = [
    {
        tab: "음식",
        name: "food",
        content: "음식 content",
        activeTab: false
    },{
        tab: "화장품",
        name: "makeup",
        content: "뷰티 content",
        activeTab: false
    },{
        tab: "의류",
        name: "clothing",
        content: "의류 content",
        activeTab: false
    },{
        tab: "도서",
        name: "book",
        content: "도서 content",
        activeTab: false
    },{
        tab: "전자 기기",
        name: "devices",
        content: "가전제품 content",
        activeTab: false
    },{
        tab: "기타",
        name: "etc",
        content: "기타 content",
        activeTab: false
    }
];

export const useTab = (categoryIndex, allTabs) => {
    if (!allTabs || !Array.isArray(allTabs)) {
        return;
    }

    return {
        categoryItem: allTabs[categoryIndex]
    };
};
