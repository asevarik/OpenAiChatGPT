import axios from "axios"

const baseAPI = "https://api.openai.com/v1/completions"
const apiKey = "Bearer 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"
export async function getQueryData(title,role,description=""){
   console.log(title,role,description);
 const response = await axios.post(baseAPI,{
    prompt : getPrompt(title,role,description),
    model:"text-davinci-003",
    max_tokens:2048,
    n:1,
    stop:"&",

 },{headers:{
    "Content-Type":"application/json",
    Authorization: apiKey
 }})
 console.log(getStructedResponse(response))
}

function getStructedResponse(response) {
   return response.data.choices[0]
}


// User 1: 
// As a student, I want to be able to access sdfasdf easily, so that I can quickly access the resources I need. 

// User 2: 
// As a teacher, I want to have clear information on sdfasdf that is easy to understand, so that I can guide my students through working with the material. 

// User 3: 
// As a parent, I need to have a way to monitor my child's progress with sdfasdf, so that I can stay informed and help my child whenever needed."

function getPrompt(title,role,description) {
   if(!description){
       return `User stories for ${title} from the perspection of ${role} give everything in points and with heading as ${role}`;
   }else{
       return `User stories for ${title} from the perspection of ${role} including additional description of ${description}`;
   }
   }

// 
 
// " and user\n\nDeveloper\n\nAs a developer I want to create a modern looking todo list app with organized layout and clean styling.\n\nTester\n\nAs a tester I want to make sure that all of the features in the todo list app are working properly and that there are no bugs.\n\nUser\n\nAs a user I want to be able to easily create new tasks, check tasks off as complete, rearrange tasks, and add notes to each task."

// "\n\n1. As a tester, I want to make sure that the user can add a todo to the list and also check off or delete it when it is completed.\n\n2. As a tester, I want to confirm that the todos are stored properly so that the user will be able to access them at a later time.\n\n3. As a tester, I want to make sure that the user can edit a todo in case he starts working on it but changes his mind later.\n\n4. As a tester, I want to ensure that the user can easily prioritize their todos by dragging and dropping their items in the list.\n\n5. As a tester, I want to verify that new todos can be added to the list even when there are already existing items in the list.\n\n6. As a tester, I want to check that the user can search and filter through all the todos in the list.\n\n7. As a tester, I want to ensure that all data is kept secure and none of the user’s todo items are shared with others."

// "\n\nTester: \n1. Ability to check that the application is able to save task correctly\n2. Ability to check that the application is able to delete task correctly\n3. Ability to check that the application is able to move tasks between lists correctly\n4. Ability to check that the application can be used on multiple platforms\n\nDeveloper:\n1. Ability to develop the core functionality of the application\n2. Ability to implement the user interface of the application\n3. Ability to add features such as sorting and filtering tasks\n4. Ability to add third-party services such as syncing with a cloud\n\nManager:\n1. Ability to track progress of the development project \n2. Ability to assign tasks within the development project\n3. Ability to assess the impact of changes on the application\n4. Ability to monitor the usage of the application and user feedback"


// "\n\n--Developer\n\n1. As a developer, I should be able to design a structure of the application\n2. As a developer, I should be able to create a new todo list \n3. As a developer, I should be able to design a todo form with specific fields\n4. As a developer, I should be able to create an API to handle CRUD operations of a todo list \n5. As a developer, I should be able to design a way to store and access data\n\n--Tester\n\n1. As a tester, I should be able to ensure that the application structure is correctly implemented\n2. As a tester, I should be able to check that new todo lists can be created\n3. As a tester, I should be able to check that the todo form fields are correctly identified and saved\n4. As a tester, I should be able to check that the API is able to handle the CRUD operations properly\n5. As a tester, I should be able to check for possible errors in storing and accessing data"

//"\n\nManager \n\nAuthentication: \n\nAs a manager, I want to be able to log in through a secure sign-in to authenticate my identity on the Todo website. \n\nTodoFlow: \n\nAs a manager, I want to be able to view a timeline of tasks with descriptions and deadlines for completion.\n\nDeveloper \n\nAuthentication:\n\nAs a developer, I want to be able to securely sign-in to the Todo website and authenticate my identity.\n\nTodoFlow:\n\nAs a developer, I want to be able to view a timeline of assigned tasks with detailed descriptions and deadlines for completion. I also want to be able to mark tasks as complete and assign tasks to other developers or managers."
