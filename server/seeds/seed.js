const db = require('../config/connection');
const {ApplicantUser, JobListings,} = require('../models');


const applicantUserData = require('./applicantUserData.json');
// const businessUserData = require('./businessUserData.json');
const jobListingsData = require('./jobListingsData.json');



db.once('open', async () => {
        await ApplicantUser.deleteMany({});
        await ApplicantUser.create(applicantUserData);

        // await BusinessUser.deleteMany({});
        // await BusinessUser.create(businessUserData);

        await JobListings.deleteMany({});
        await JobListings.create(jobListingsData);

        console.log('All done!');
        process.exit(0)
});