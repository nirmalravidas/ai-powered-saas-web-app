// lib/cloudant.ts

import { CloudantV1, IamAuthenticator } from "@ibm-cloud/cloudant";

// Initialize Cloudant client
const cloudant = CloudantV1.newInstance({
  authenticator: new IamAuthenticator({
    apikey: process.env.CLOUDANT_API_KEY as string,
  }),
  serviceUrl: process.env.CLOUDANT_URL as string,
});

// Define User document type
type UserDoc = {
  _id?: string;
  email: string;
  name: string;
  createdAt: string;
};

// ✅ Only keep usersDb
const usersDb = {
  insert: async (doc: UserDoc) =>
    cloudant.postDocument({ db: "users", document: doc }),
  get: async (id: string) =>
    cloudant.getDocument({ db: "users", docId: id }).catch(() => null),
};

export { cloudant, usersDb };
