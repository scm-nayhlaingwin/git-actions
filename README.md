# git-actions
> [link](https://towardsdatascience.com/github-actions-everything-you-need-to-know-to-get-started-537f1dffa0ed)
> GitHub Actions is a continuous integration and continuous delivery (CI/CD) platform that automates build, test, and deployment pipelines. It also allows you to execute code in the repository when certain events occur, making it easy to extend and customize.

# path
> .github/workflows/ .yml

> name: 
>
> ``on``: 👉 To add triggers, you’ll have to use the on section.(push, pull_request, ...events)
> Then, each event is linked to a specific branch (main , dev , etc.)
>
> ``jobs``: 👉 Tasks are then defined inside the job section (unders steps)

## syntax 
> on : the event that triggers the workflow
> runs-on : the machine each job should run (e.g. ubuntu-latest)
> jobs: the list of jobs that make the workflow
> steps : the series of tasks that run inside each job
> run : the command that gets executed