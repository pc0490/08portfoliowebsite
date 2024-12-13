export const githubInfoLoader = async () => {
    const userResponse = await fetch('https://api.github.com/users/pc0490')
    const reposResponse = await fetch('https://api.github.com/users/pc0490/repos?sort=created&direction=desc')
    
    const [user, repos] = await Promise.all([
        userResponse.json(),
        reposResponse.json()
    ])

    return { user, repos: repos.slice(0, 6) }
} 