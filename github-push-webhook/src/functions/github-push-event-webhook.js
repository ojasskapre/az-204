const Crypto = require('crypto');

module.exports = async function (context, req) {
  context.log('JavaScript HTTP trigger function processed a request.');

  const hmac = Crypto.createHmac('sha1', 'mysecret');
  const signature = hmac.update(JSON.stringify(req.body)).digest('hex');
  const shaSignature = `sha1=${signature}`;
  const gitHubSignature = req.headers['x-hub-signature'];

  if (!shaSignature.localeCompare(gitHubSignature)) {
    if (req.body.ref && req.body.ref.startsWith('refs/heads/')) {
      const repoName = req.body.repository.full_name;
      const filesChanged = req.body.commits.map((c) => {
        return {
          committer_username: c.committer.username,
          files_added: c.added,
        };
      });

      context.res = {
        body: `${repoName} => ${JSON.stringify(filesChanged)}`,
      };
    } else {
      context.res = {
        status: 400,
        body: 'Invalid payload for Push event',
      };
    }
  } else {
    context.res = {
      status: 401,
      body: "Signatures don't match",
    };
  }
};
