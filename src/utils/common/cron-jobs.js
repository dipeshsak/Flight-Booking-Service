const cron = require('node-cron');

const { BookingService } = require('../../services');

function scheduleCrons() {
    // */30 * * * * 30 mins
    //*/5 * * * * * 5 sec

    cron.schedule('*/30 * * * *', async () => {
        await BookingService.cancelOldBookings();
    });
}

module.exports = scheduleCrons;