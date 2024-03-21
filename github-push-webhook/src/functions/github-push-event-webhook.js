module.exports = async function (context, req) {
  context.log('JavaScript HTTP trigger function processed a request.');

  if (req.body.ref && req.body.ref.startsWith('refs/heads/')) {
    const repoName = req.body.repository.full_name;
    const filesChanged = req.body.commits.map((c) => {
      return {
        committer_username: c.committer.username,
        files_added: c.added,
      };
    });
    context.log(repoName);
    context.res = {
      body: `${repoName} => ${JSON.stringify(filesChanged)}`,
    };
  } else {
    context.res = {
      status: 400,
      body: 'Invalid payload for Push event',
    };
  }
};
