export const openLoginPopup = (account) => {
    if (account !== "login") return;    
    let popup = document.getElementsByClassName("loginPopup")[0];
    popup.style.display = "flex";
};

export const profileMenuClose = () => {
    let profile_menu = document.getElementsByClassName("profile-menu")[0];
    profile_menu.style.display = "none";
}