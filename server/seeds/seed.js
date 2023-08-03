const db = require('../config/connection');
const {ApplicantUser, JobListings, BusinessUser} = require('../models');


const applicantUserData = require('./applicantUserData.json');
const businessUserData = require('./businessUserData.json');
const jobListingsData = require('./jobListingsData.json');



db.once('open', async () => {
    try {
        // Used to clean the database
        await ApplicantUser.deleteMany({});
        await BusinessUser.deleteMany({});
        await JobListings.deleteMany({});

        // Will bulk create all models
        const ApplicantUsers = await ApplicantUser.insertMany(applicantUserData);
        const BusinessUsers = await BusinessUser.insertMany(businessUserData);
        const JobListing = await JobListings.insertMany(jobListingsData); 
        
        console.log('All done!');
        process.exit(0)
    } catch (err) {
        throw err;
    }
});