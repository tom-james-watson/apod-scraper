'use strict'

const jsonfile = require('jsonfile');
const apod = require('apod');

apod.apiKey = 'r6Y7mkxnjKiJDABrhUQKM1ibZep9b41ShWhQ7JFk';

function requestForDate(date) {
    console.log('Requesting for date:', date);
    apod(date, function(err, result) {
        if (err) {
            console.log('APOD API error:', err);
        } else {
            // We only want NASA images, as they are public domain. Also, some
            // images don't have hdurl so ignore them too
            if (!result.copyright && result.hdurl) {
                console.log(result);
                images.push(result);
            }
        }
        // Looped through all, write JSON file out
        if (date.getTime() === now.getTime()) {
            console.log('\nWriting results to apod.json');
            jsonfile.writeFile('apod.json', images, function(err) {
                if (err) {
                    console.log('Failed to write apod.json:', err);
                }
            });
        } else {
            date.setDate(date.getDate() + 1);
            requestForDate(date);
        }
    });
}

const now = new Date();
now.setHours(0,0,0,0);
const startDate = new Date(2015, 0, 1)
let images = [];
requestForDate(startDate);
