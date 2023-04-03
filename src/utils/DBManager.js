//TODO CRUD Operations Goes here
const USER_STORY_KEY = "userStories"

export const saveUserStories = (userStory) => {
    const totalUserStories = getUserStories()
    let data = null
    if (!totalUserStories) {
        data = JSON.stringify([userStory])
    } else {
        data = JSON.stringify([...totalUserStories, userStory])
    }
    if (data) {
        localStorage.setItem(USER_STORY_KEY, data);
        return true
    }
    console.log("stringify error");
    return false
}

export const updateUserStories = (userStories = [], updatedID) => {
    const totalUserStories = getUserStories()
    const updatedData = totalUserStories.map(userStoryObj => {
        if (userStoryObj.id === updatedID) {
            console.log("user id found ", updatedID)
            return { ...userStoryObj, userStories: userStories }
        }
        return userStoryObj
    });
    const data = JSON.stringify(updatedData)
    if (data) {
        localStorage.setItem(USER_STORY_KEY, data);
        return true
    }
    console.log("stringify error");
    return false
}


export const getUserStories = () => {
    const res = localStorage.getItem(USER_STORY_KEY)
    if (!res) {
        console.log("error retriving response")
        return null;
    }
    const response = JSON.parse(res)
    if (response) {
        return response;
    }
    console.log("error in parsing the response")
    return null;
}
