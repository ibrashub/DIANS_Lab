import { Component, OnInit } from '@angular/core';
import { timeout } from 'rxjs';
declare const L: any;


@Component({
  selector: 'app-user-location',
  templateUrl: './user-location.component.html',
  styleUrls: ['./user-location.component.scss']
})

export class UserLocationComponent implements OnInit {
  title = 'UserLocation';

  ngOnInit() {
    if (!navigator.geolocation) {
      console.log('location is not supported');
    }

    navigator.geolocation.getCurrentPosition((position) => {
      const coords = position.coords;

      console.log(`lat: ${position.coords.latitude}, lon: ${position.coords.longitude} `);

      let map = L.map('map').setView([45.327010, 14.442189], 15);

      L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic3RlZmFua2FtY2hldnNraSIsImEiOiJjbGMyYmplZjIwOWJmM3JvOXNzZ3AyeTFiIn0.7uY1-PNW-RwiJPaaY91NrQ',
        {
          attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 18,
          id: 'mapbox/streets-v11',
          tileSize: 512, 
          zoomOffset: -1, 
          accessToken: 'pk.eyJ1Ijoic3RlZmFua2FtY2hldnNraSIsImEiOiJjbGMyYmplZjIwOWJmM3JvOXNzZ3AyeTFiIn0.7uY1-PNW-RwiJPaaY91NrQ'
        }).addTo(map);

      let marker1 = L.marker([45.328054, 14.442426]).addTo(map);
      marker1.bindPopup('<b>Gomila Square Parking</b>').openPopup();

      let marker2 = L.marker([45.329482, 14.439376]).addTo(map);
      marker2.bindPopup('<b>Zagrad Parking Garage</b>').openPopup();

      let marker3 = L.marker([45.328936, 14.448287]).addTo(map);
      marker3.bindPopup('<b>Školjić Parking Lot</b>').openPopup();

      let marker4 = L.marker([45.330942, 14.446702]).addTo(map);
      marker4.bindPopup('<b>Kalvarija Parking lot</b>').openPopup();

      let marker5 = L.marker([45.332505, 14.430331]).addTo(map);
      marker5.bindPopup('<b>Parking Cambierijeva</b>').openPopup();

      let marker6 = L.marker([45.333334, 14.431297]).addTo(map);
      marker6.bindPopup('<b>Potok Parking</b>').openPopup();

      let marker7 = L.marker([45.336992, 14.428314]).addTo(map);
      marker7.bindPopup('<b>Velebitska Parking</b>').openPopup();

      let marker8 = L.marker([45.341205, 14.418530]).addTo(map);
      marker8.bindPopup('<b>Javno parkiralište</b>').openPopup();

      let marker9 = L.marker([45.337673, 14.408364]).addTo(map);
      marker9.bindPopup('<b>BOE Parking Rijeka - ZAPADNI TRGOVAČKI CENTAR</b>').openPopup();

      let marker10 = L.marker([45.335108, 14.412334]).addTo(map);
      marker10.bindPopup('<b>Parking Mlaka</b>').openPopup();

      let marker11 = L.marker([45.326805, 14.446292]).addTo(map);
      marker11.bindPopup('<b>Garaža Stari grad</b>').openPopup();

      let marker12 = L.marker([45.328859, 14.438234]).addTo(map);
      marker12.bindPopup('<b>Parkiralište Korzo/b>').openPopup();

      let marker13 = L.marker([45.319165, 14.463908]).addTo(map);
      marker13.bindPopup('<b>Hotel Jadran Parkin</b>').openPopup();

      let marker14 = L.marker([45.318633, 14.467617]).addTo(map);
      marker14.bindPopup('<b>Tower Center Parking</b>').openPopup();

      let marker15 = L.marker([45.319982, 14.465401]).addTo(map);
      marker15.bindPopup('<b>Parking kod Towera</b>').openPopup()


    });
    this.watchPosition();

  }

  watchPosition() {
    let desLat = 0;
    let desLon = 0;
    let id = navigator.geolocation.watchPosition(
      (position) => {
        console.log(
          `lat: ${position.coords.latitude}, lon: ${position.coords.longitude} `
        );
        if (position.coords.latitude == desLat) {
          navigator.geolocation.clearWatch(id);
        }

      }, (err) => {
        console.log(err);
      }, {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    })
  }
}









