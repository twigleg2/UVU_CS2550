# git

- `git checkout` - the checkout command is overloaded, dealing with branches and files, and has safe and unsafe modes of operation.  Since 2019, 'switch' and 'restore' were implemented to break up this overloaded functionality.  However, 'checkout' is still a valid command is worth learning.
  - `<branchName>` - switches to the branch with the given name
  - `-b <branchName>` - creates a new branch with the given name AND checks it out. The new branch will be identical to the branch that is checked out when you run the command.
  - `<commitHash>` - checks out a previous commit. NOTE: if you do this, you are not on any branch.  If you make modifications that you want to save, you must create a new branch and commit your changes.

- `git switch` -  Deals with branches only, not files.  Is "safe", meaning it will not destroy unsaved work.
  - `<branchName>` - same as 'g'it checkout \<branchName\>'
  - `-c <branchName>` - same as 'git checkout -b \<branchName\>'

- `git restore` - Deals with files only, not branches. is "unsafe", meaning it might destroy unsaved work.
  - .

- `git branch` - view all branches
  - `-D <name>` - delete a branch with the given name
- `git fetch` - fetches any changes on the remote branch but DOES NOT merge them.
  
- `git merge` - if used after fetch, this will merge the fetched updates into the currentbranch
  - `<branchName>` - begins to merge the named branch into the CURRENT branch, that is, the branch that is currently checked out
  - `--abort` - cancel the merge in progress.  Very useful if you get merge conflicts that you don't want to deal with right now.
- `git pull` - this is equivalent to doing 'git fetch' imediately followed by 'git merge'
  - `<branchName>` - same, but with a named branch

- `git status` - shows all files that have been modified and which ones are staged for the next commit

- `git add`
  - `.` - stages all files in the current directory for commit
  - `<filename>` - stage the named file for commit
  
- `git commit`
  - `-m "type a short message here"`

- `git log` - view a history of previous commits and their hashes

- `git push` - pushes all your local commits to the remote branch

- `git stash` - takes all of your non-commited changes and hides them away in the stash.  The stash can have more than one version in it (treat it like a stack)
  - `apply` - takes the top-most set of changes from the stash and puts them back in the working directory.
  - `drop` - deletes the top-most set of changes in the stash.
  - `pop` - identical to doing 'git stash apply' followed imediately by 'git stash drop'.

- `git diff` - compare working directory (all local changes) with the index

![git data transport commands](./git_data_transport_commands.jpg)



something here to make the version change the version......