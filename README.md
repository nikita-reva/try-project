# try-project
Building nothing out of something.

***

### Git Workflow
This guide contains the git commands we will use frequently.
A more comprehensive guide can be found [here](https://www.atlassian.com/git).

##### First you need to initialize Git in a folder designated for it.
* Create a new Git repository 
```git init```
* Add a new remote repository 
```git remote add origin repository_url```
* Clone an existing remote repository 
```git clone repository_url```
*(The url can be obtained from the repository on GitHub)*
##### Now you have a copy of the remote repository and you can start making your changes.
##### To avoid conflicts in the code each team member should only work on files he is assigned to work on.
##### Each team member should make their changes to a branch dedicated to their current responsibility.
##### The branch is later merged with the master branch.
##### The master branch must always be doployable and must be protected from incorrect changes.
* Create a new branch (choose a meaningful branch name) it and switch to it:
```git checkout -b branch_name```
* Create a new branch (choose a meaningful branch name):
```git branch branch_name```
* Switch to another branch:
```git checkout branch_name```
* View all active branch:
```git branch```
* View all existing branches:
```git branch -a```
* Delete a branch:
```git branch -d branch_name```
* Lists all commits (code snapshots) for this branch:
```git log```
* Checkout the specific commit:
```git checkout commit_id```
* Stage all changes:
```git add .```
* Commit changes with a meaningful message (-m stands for message, e.g. "Initial commit"):
```git commit -m "message_string"```

##### When your task is complete, push your changes to the remote repository
* Push your branch to the remote repository (first push):
```git push -u origin branch_name```
* Push your branch to the remote repository (subsequent pushes):
```git push```

##### To obtain the latest version of the project, pull from the master branch
* First switch to the master (git checkout master) branch and then pull:
```git pull```

##### Merging on the remote repository will be performed by the merge supervisor.
##### However, you can use the merge command to merge branches on your local system.
* Merge changes from another branch to the current branch:
```git merge branche_name```

##### You can check the status of your local repository by using the git status command.
* View status of your local repository
```git status```

##### Git credentials.
* List credentials
```git config --global -l```

* Change fields  
```git config --global user.name "your_name"```  
```git config --global user.email "your_email"```  
```git config --global user.password "your_password"```  

