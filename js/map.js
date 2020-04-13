// GOOGLE MAP

function initMap() {
    let rhodeisland = {
      info: 'Rhode Island',
      lat: 41.580093,
      long: -71.477432 
    }
  
    let connecticut = {
      info:'Connecticut',
      lat: 41.603222,
      long: -73.087746
    }
  
    let massachusetts = {
      info: 'Massachusetts',
      lat: 42.407211,
      long: -71.382439
    }
    let maine = {
      info: 'maine',
      lat: 45.253784,
      long: -69.445473
    }
    let newhampshire = {
      info: 'New Hampshire',
      lat: 43.193851,
      long: -71.572395
    }
    let vermont = {
      info: 'Vermmont',
      lat: 44.558804,
      long: -72.577843
    }
    let newyork = {
      info: 'New York',
      lat: 40.712776,
      long: -74.005974
    }
    let pennsylvania = {
      info: 'Pennsylvania',
      lat: 41.203323,
      long: -77.194527
    }
    let delaware = {
      info: 'Delaware',
      lat: 38.910831,
      long: -75.527672
    }
    let maryland = {
      info: 'Maryland',
      lat: 39.045753,
      long: -76.641273
    }
    let virginia = {
      info: 'Virginia',
      lat: 36.845130,
      long: -75.975440
    }
    let westvirginia = {
      info: 'West Virginia',
      lat: 38.597626,
      long: -80.454903
    }
    let northcarolina = {
      info: 'North Carolina',
      lat: 35.759575,
      long: -79.019302
    }
    let sourthcarolina = {
      info: 'Sourth Carolina',
      lat:33.836082,
      long: -81.163727
    }
    let georgia = {
      info: 'Georgia',
      lat: 32.165623,
      long: -82.900078
    }
    let florida = {
      info: 'Florida',
      lat: 27.664827,
      long: -81.515755
    }
    let alabama = {
      info: 'Alabama',
      lat: 32.318230,
      long: -86.902298
    }
    let tennessee = {
      info: 'Tennessee',
      lat: 35.517490,
      long: -86.580444
    }
    let ohio = {
      info: 'Ohio',
      lat: 40.417286,
      long: -82.907120
    }
    let toronto = {
      info: 'Toronto',
      lat: 43.653225,
      long: -79.383186 
    }
    let illinois = {
      info: 'Illinois',
      lat: 40.633125,
      long: -89.398529
    }
    let mississippi = {
      info: 'Mississippi',
      lat: 32.354668,
      long: -89.398529
    }
    let louisiana = {
      info: 'louisiana',
      lat: 30.984299,
      long: -91.962334
    }
    let nebraska = {
      info: 'Nebraska',
      lat: 41.492538,
      long: -99.901810
    }
    let oklahoma = {
      info: 'Oklahoma',
      lat: 35.007751,
      long: -97.092880
    }
    let texas = {
      info: 'Texas',
      lat: 31.968599,
      long: -99.901810
    }
    let newmexico = {
      info: 'New Mexico',
      lat: 32.319939,
      long: -106.763657
    }
    let arizona = {
      info: 'Arizona',
      lat: 37.080410,
      long: -78.747818
    }
    let california = {
      info: 'Califonrnia',
      lat: 36.778259,
      long: -119.417931
    }

    let washington = {
      info: 'Washington',
      lat: 47.606209,
      long: -122.332069
    }
    let washingtondc = {
      info: 'Washington DC',
      lat: 38.907192,
      long: -77.036873
    }
    let ireland = {
      info: 'Ireland',
      lat: 53.412910,
      long: -8.243890
    }
    let london = {
      info: 'London',
      lat: 51.507351,
      long: -0.127758
    }
    let moscow = {
      info: 'Moscow',
      lat: 55.755825,
      long: 37.617298
    }
    let rostov = {
      info: 'Rostov',
      lat: 47.223042,
      long: 39.721378
    }
    let juarez = {
      info: 'Juarez',
      lat: 31.690365,
      long: -106.424545
    }
    let cancun = {
      info: 'Cancun',
      lat: 21.161907,
      long: -86.851524
    }
    let belize = {
      info: 'Belize',
      lat: 17.189877,
      long: -88.497650
    }
    let guadalajara = {
      info: 'Guadalajara',
      lat: 20.659698,
      long: -103.349609
    }
    let cozumel = {
      info: 'Cozumel',
      lat: 20.422983,
      long: -86.922340
    }
  let stthomas = {
    info: 'St Thomas',
    lat: 18.367860,
    long: -64.918990
  }
  let puertorico = {
    info: 'Puerto Rico',
    lat: 18.220833,
    long: -66.590149
  }
  let honduras = {
    info: 'Honduras',
    lat: 14.105760,
    long: -87.204201
  }
    let oahu = {
      info: 'Oahu',
      lat: 21.306944,
      long: -157.858337
    }
    let hilo = {
      info: 'Big Island',
      lat: 19.896767,
      long: -155.582779
    }
    let newjersey = {
      info: 'New Jersey',
      lat: 40.058323,
      long: -74.405663

    }
  
  
    var locations = [
      [rhodeisland.info, rhodeisland.lat, rhodeisland.long, 0],
      [connecticut.info, connecticut.lat, connecticut.long, 1],
      [massachusetts.info, massachusetts.lat, massachusetts.long, 2],
      [maine.info, maine.lat, maine.long, 3],
      [newhampshire.info, newhampshire.lat, newhampshire.long, 4],
      [vermont.info, vermont.lat, vermont.long, 5],
      [newyork.info, newyork.lat, newyork.long, 6],
      [pennsylvania.info, pennsylvania.lat, pennsylvania.long, 7],
      [delaware.info, delaware.lat, delaware.long, 8],
      [maryland.info, maryland.lat,maryland .long, 9],
      [virginia.info, virginia.lat, virginia.long, 10],
      [westvirginia.info, westvirginia.lat, westvirginia.long, 11],
      [northcarolina.info, northcarolina.lat, northcarolina.long, 12],
      [sourthcarolina.info, sourthcarolina.lat, sourthcarolina.long, 13],
      [georgia.info, georgia.lat, georgia.long, 14],
      [florida.info, florida.lat, florida.long, 15],
      [alabama.info, alabama.lat, alabama.long, 16],
      [tennessee.info, tennessee.lat, tennessee.long, 17],
      [ohio.info,ohio .lat, ohio.long, 18],
      [toronto.info, toronto.lat, toronto.long, 19],
      [illinois.info, illinois.lat, illinois.long, 20],
      [mississippi.info, mississippi.lat, mississippi.long, 21],
      [louisiana.info, louisiana.lat, louisiana.long, 22],
      [nebraska.info, nebraska.lat, nebraska.long, 23],
      [oklahoma.info, oklahoma.lat, oklahoma.long, 24],
      [texas.info, texas.lat, texas.long, 25],
      [newmexico.info, newmexico.lat, newmexico.long, 26],
      [arizona.info, arizona.lat, arizona.long, 27],
      [california.info, california.lat, california.long, 28],
      [washington.info, washington.lat, washington.long, 29],
      [washingtondc.info, washingtondc.lat, washingtondc.long, 30],
      [ireland.info, ireland.lat, ireland.long, 31],
      [london.info, london.lat, london.long, 32],
      [moscow.info, moscow.lat, moscow.long, 33],
      [rostov.info, rostov.lat, rostov.long, 34],
      [juarez.info, juarez.lat, juarez.long, 35],
      [cancun.info, cancun.lat, cancun.long, 36],
      [belize.info, belize.lat, belize.long, 37],
      [guadalajara.info, guadalajara.lat, guadalajara.long, 38],
      [cozumel.info, cozumel.lat, cozumel.long, 39],
      [stthomas.info, stthomas.lat, stthomas.long, 40],
      [puertorico.info, puertorico.lat, puertorico.long, 41],
      [honduras.info, honduras.lat, honduras.long, 42],
      [oahu.info, oahu.lat, oahu.long, 43],
      [hilo.info, hilo.lat, hilo.long, 44],
      [newjersey.info, newjersey.lat, newjersey.long, 45]
    ]
  
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 2,
      center: new google.maps.LatLng(41.976816, -87.659916),
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    })
  
    var infowindow = new google.maps.InfoWindow({})
  
    var marker, i
  
    for (i = 0; i < locations.length; i++) {
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map,
      })
  
      google.maps.event.addListener(
        marker,
        'click',
        (function(marker, i) {
          return function() {
            infowindow.setContent(locations[i][0])
            infowindow.open(map, marker)
          }
        })(marker, i)
      )
    }
  }