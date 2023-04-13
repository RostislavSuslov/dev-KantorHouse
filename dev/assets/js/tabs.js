const installTab =()=> {
    const tabsBtns = document.querySelectorAll('.tab-button');
    const tabsContent = document.querySelectorAll('.tab-content');
    
    tabsBtns.forEach((itemBtn, index) =>{
        itemBtn.setAttribute('data-tab', 'tab-content_' + index);
    });
    
    tabsContent.forEach((itemContent, index) =>{
        itemContent.setAttribute('id', 'tab-content_' + index);
    });
    
    const onTabClick = (event) => {
 
        const thisTab = event.target.closest('.tabs');
        const thisTabBtn = thisTab.querySelectorAll('.tab-button');
        const thisTabContent = thisTab.querySelectorAll('.tab-content');

        thisTabBtn.forEach(itemBtn => itemBtn.classList.remove('active'));
        thisTabContent.forEach(itemContent => itemContent.classList.remove('active'));
       
        const getTabId = event.target.getAttribute("data-tab");

        event.target.classList.add('active');

        const activeContent = document.getElementById(getTabId);
        activeContent.classList.add('active');
    }

    tabsBtns.forEach(btn => {
        btn.addEventListener('click', onTabClick);
    });
}

document.querySelector('.tabs') ? installTab() : null;