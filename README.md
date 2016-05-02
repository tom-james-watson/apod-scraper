## NASA Astronomy Picture of the Day Scraper

This utility will scrape [NASA APOD](http://apod.nasa.gov/apod/) and create a json file `apod.json` of all photos since a given date (hardcoded) in the following format:

```
[
    {
        "date": "2015-1-3",
        "explanation": "Get out your red/blue glasses and check out this awesome stereo view of another world. The scene was recorded by Apollo 17 mission commander Eugene Cernan on December 11, 1972, one orbit before descending to land on the Moon. The stereo anaglyph was assembled from two photographs (AS17-147-22465, AS17-147-22466) captured from his vantage point on board the Lunar Module Challenger as he and Dr. Harrison Schmitt flew over Apollo 17's landing site in the Taurus-Littrow Valley. The broad, sunlit face of the mountain dubbed South Massif rises near the center of the frame, above the dark floor of Taurus-Littrow to its left. Beyond the mountains, toward the lunar limb, lies the Moon's Mare Serenitatis. Piloted by Ron Evans, the Command Module America is visible in orbit in the foreground against the South Massif's peak.",
        "hdurl": "http://apod.nasa.gov/apod/image/1501/22466-22467anaVantuyne.jpg",
        "media_type": "image",
        "service_version": "v1",
        "title": "Apollo 17: A Stereo View from Lunar Orbit",
        "url": "http://apod.nasa.gov/apod/image/1501/22466-22467anaVantuyne900.jpg"
    },
    ...
]
```
