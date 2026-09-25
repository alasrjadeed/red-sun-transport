// Auto-generated demo snapshot — scrubbed of PII. Regenerate with gen script.
export const DEMO = {
 "/api/dashboard": {
  "kpis": {
   "vehicles": 9,
   "drivers": 8,
   "activeTrips": 3,
   "completedToday": 2,
   "revenueBhd": 990,
   "fuelCostBhd": 305,
   "utilization": 67,
   "openMaintenance": 4,
   "openIncidents": 1,
   "pendingQuotes": 3,
   "openInquiries": 2,
   "activeMoves": 1,
   "movesCompleted": 0,
   "invoiceOutstanding": 555.5,
   "docsExpired": 1,
   "docsExpiring30": 1,
   "docsExpiring90": 3,
   "monthExpense": 6499.5,
   "monthNet": -5559.5
  },
  "financeMonth": {
   "period": "month",
   "vehicles": [
    {
     "id": "DEMO-0001",
     "label": "Demo vehicle",
     "plate": "DEMO-0002",
     "revenue": 0,
     "fuel": 0,
     "maintenance": 0,
     "driver": 0,
     "other": 0,
     "overhead": 50,
     "net": 0,
     "byCat": {
      "fuel": 0,
      "maintenance": 0
     }
    },
    {
     "id": "DEMO-0003",
     "label": "Demo vehicle",
     "plate": "DEMO-0004",
     "revenue": 0,
     "fuel": 32,
     "maintenance": 0,
     "driver": 0,
     "other": 187.5,
     "overhead": 50,
     "net": -219.5,
     "byCat": {
      "tires": 155.5,
      "tolls": 32,
      "fuel": 32,
      "maintenance": 0
     }
    },
    {
     "id": "DEMO-0005",
     "label": "Demo vehicle",
     "plate": "DEMO-0006",
     "revenue": 640,
     "fuel": 134,
     "maintenance": 1020,
     "driver": 700,
     "other": 740,
     "overhead": 50,
     "net": -1954,
     "byCat": {
      "financing": 500,
      "tires": 240,
      "fuel": 134,
      "maintenance": 1020
     }
    },
    {
     "id": "DEMO-0007",
     "label": "Demo vehicle",
     "plate": "DEMO-0008",
     "revenue": 95,
     "fuel": 18,
     "maintenance": 0,
     "driver": 0,
     "other": 170,
     "overhead": 50,
     "net": -93,
     "byCat": {
      "accident": 170,
      "fuel": 18,
      "maintenance": 0
     }
    },
    {
     "id": "DEMO-0009",
     "label": "Demo vehicle",
     "plate": "DEMO-0010",
     "revenue": 0,
     "fuel": 0,
     "maintenance": 0,
     "driver": 0,
     "other": 800,
     "overhead": 50,
     "net": -800,
     "byCat": {
      "leasing": 800,
      "fuel": 0,
      "maintenance": 0
     }
    },
    {
     "id": "DEMO-0011",
     "label": "Demo vehicle",
     "plate": "DEMO-0012",
     "revenue": 0,
     "fuel": 64,
     "maintenance": 0,
     "driver": 720,
     "other": 336,
     "overhead": 50,
     "net": -1120,
     "byCat": {
      "insurance": 156,
      "registration": 180,
      "fuel": 64,
      "maintenance": 0
     }
    },
    {
     "id": "DEMO-0013",
     "label": "Demo vehicle",
     "plate": "DEMO-0014",
     "revenue": 110,
     "fuel": 20,
     "maintenance": 0,
     "driver": 0,
     "other": 0,
     "overhead": 50,
     "net": 90,
     "byCat": {
      "fuel": 20,
      "maintenance": 0
     }
    },
    {
     "id": "DEMO-0015",
     "label": "Demo vehicle",
     "plate": "DEMO-0016",
     "revenue": 145,
     "fuel": 28,
     "maintenance": 0,
     "driver": 650,
     "other": 190,
     "overhead": 50,
     "net": -723,
     "byCat": {
      "spareParts": 190,
      "fuel": 28,
      "maintenance": 0
     }
    },
    {
     "id": "DEMO-0017",
     "label": "Demo vehicle",
     "plate": "DEMO-0018",
     "revenue": 0,
     "fuel": 0,
     "maintenance": 0,
     "driver": 0,
     "other": 0,
     "overhead": 50,
     "net": 0,
     "byCat": {
      "fuel": 0,
      "maintenance": 0
     }
    }
   ],
   "totals": {
    "revenue": 990,
    "fuel": 296,
    "maintenance": 1020,
    "driver": 2070,
    "other": 2423.5,
    "net": -5559.5,
    "unassignedRev": 0,
    "unassignedFuel": 0,
    "unassignedOther": 50,
    "overhead": 690
   },
   "cats": [
    "insurance",
    "registration",
    "salary",
    "leasing",
    "financing",
    "tires",
    "spareParts",
    "accident",
    "tolls",
    "parking"
   ]
  },
  "mvStageCounts": {
   "inquiry": 1,
   "survey": 0,
   "quotation": 1,
   "booking": 0,
   "packing": 1,
   "pickup": 0,
   "loading": 0,
   "transit": 0,
   "delivery": 0,
   "unloading": 0,
   "completed": 0
  },
  "invoiceStatusCounts": {
   "draft": 1,
   "issued": 2,
   "paid": 1
  },
  "statusCounts": {
   "active": 4,
   "on-trip": 2,
   "maintenance": 1,
   "idle": 2
  },
  "driverCounts": {
   "on-duty": 5,
   "standby": 1,
   "off-duty": 1,
   "leave": 1
  },
  "alerts": [
   {
    "id": "DEMO-0019",
    "kind": "service",
    "severity": "attention",
    "message": "Demo reference entry",
    "refId": "veh-002"
   },
   {
    "id": "DEMO-0020",
    "kind": "insurance",
    "severity": "upcoming",
    "message": "Demo reference entry",
    "refId": "veh-004"
   },
   {
    "id": "DEMO-0021",
    "kind": "maintenance",
    "severity": "urgent",
    "message": "Demo reference entry",
    "refId": "veh-004"
   },
   {
    "id": "DEMO-0022",
    "kind": "fuel",
    "severity": "attention",
    "message": "Demo reference entry",
    "refId": "veh-004"
   },
   {
    "id": "DEMO-0023",
    "kind": "service",
    "severity": "upcoming",
    "message": "Demo reference entry",
    "refId": "veh-005"
   },
   {
    "id": "DEMO-0024",
    "kind": "service",
    "severity": "upcoming",
    "message": "Demo reference entry",
    "refId": "veh-007"
   },
   {
    "id": "DEMO-0025",
    "kind": "stalled-delivery",
    "severity": "urgent",
    "message": "Demo reference entry",
    "refId": "veh-007"
   },
   {
    "id": "DEMO-0026",
    "kind": "insurance",
    "severity": "upcoming",
    "message": "Demo reference entry",
    "refId": "veh-008"
   },
   {
    "id": "DEMO-0027",
    "kind": "license",
    "severity": "upcoming",
    "message": "Demo reference entry",
    "refId": "drv-002"
   },
   {
    "id": "DEMO-0028",
    "kind": "license",
    "severity": "upcoming",
    "message": "Demo reference entry",
    "refId": "drv-004"
   },
   {
    "id": "DEMO-0029",
    "kind": "idle-behaviour",
    "severity": "attention",
    "message": "Demo reference entry",
    "refId": "drv-004"
   },
   {
    "id": "DEMO-0030",
    "kind": "document",
    "severity": "upcoming",
    "message": "Demo reference entry",
    "refId": "doc-maintenanceInvoice-120x"
   },
   {
    "id": "DEMO-0031",
    "kind": "document",
    "severity": "upcoming",
    "message": "Demo reference entry",
    "refId": "doc-fuelReceipt-90x"
   },
   {
    "id": "DEMO-0032",
    "kind": "document",
    "severity": "upcoming",
    "message": "Demo reference entry",
    "refId": "doc-license-60x"
   },
   {
    "id": "DEMO-0033",
    "kind": "document",
    "severity": "attention",
    "message": "Demo reference entry",
    "refId": "doc-insurance-14x"
   },
   {
    "id": "DEMO-0034",
    "kind": "document",
    "severity": "urgent",
    "message": "Demo reference entry",
    "refId": "doc-registration-5x"
   },
   {
    "id": "DEMO-0035",
    "kind": "document",
    "severity": "upcoming",
    "message": "Demo reference entry",
    "refId": "doc-registration-5x"
   },
   {
    "id": "DEMO-0036",
    "kind": "document",
    "severity": "upcoming",
    "message": "Demo reference entry",
    "refId": "doc-c7b7003d"
   },
   {
    "id": "DEMO-0037",
    "kind": "document",
    "severity": "upcoming",
    "message": "Demo reference entry",
    "refId": "doc-3f8ab112"
   },
   {
    "id": "DEMO-0038",
    "kind": "incident",
    "severity": "attention",
    "message": "Demo reference entry",
    "refId": "inc-002"
   },
   {
    "id": "DEMO-0039",
    "kind": "geo",
    "severity": "urgent",
    "message": "Demo reference entry",
    "refId": "gmuf2dmq0"
   },
   {
    "id": "DEMO-0040",
    "kind": "geo",
    "severity": "urgent",
    "message": "Demo reference entry",
    "refId": "gmudp38jq"
   }
  ],
  "geoAlerts": [
   {
    "id": "DEMO-0041",
    "status": "weak",
    "acked": false,
    "en": "Audit queued — run /api/geo/score for the full score.",
    "ar": "تمت جدولة التدقيق — شغّلي /api/geo/score للنتيجة الكاملة.",
    "ts": 1790226068040
   },
   {
    "id": "DEMO-0042",
    "status": "weak",
    "acked": false,
    "en": "Audit queued — run /api/geo/score for the full score.",
    "ar": "تمت جدولة التدقيق — شغّلي /api/geo/score للنتيجة الكاملة.",
    "ts": 1790143281926
   }
  ],
  "blogAutopilot": {
   "posts": [
    {
     "id": "DEMO-0043",
     "topic": "Bahrain move checklist",
     "status": "draft",
     "lang": "en",
     "en": "Red Sun blog autopilot — Bahrain move checklist (EN). Draft ready for scheduling.",
     "ar": "طيار Red Sun التلقائي — Bahrain move checklist (عربي). المسودة جاهزة للجدولة.",
     "ts": 1790143305465
    },
    {
     "id": "DEMO-0044",
     "topic": "x",
     "status": "draft",
     "lang": "en",
     "en": "Red Sun blog autopilot — x (EN). Draft ready for scheduling.",
     "ar": "طيار Red Sun التلقائي — x (عربي). المسودة جاهزة للجدولة.",
     "ts": 1790225922190
    },
    {
     "id": "DEMO-0045",
     "slug": "DEMO-0046",
     "status": "published",
     "published": true,
     "publishedAt": "+973 3935 0330",
     "ts": 1790227798167,
     "topic": "",
     "en": {
      "title": "Demo Title",
      "body": "Villa moves in Manama average 120 BHD; piano crating starts 40 BHD. Red Sun quotes before moving — no hidden charges."
     },
     "ar": null
    },
    {
     "id": "DEMO-0047",
     "slug": "DEMO-0048",
     "status": "published",
     "published": true,
     "publishedAt": "+973 3935 0330",
     "ts": 1790296778225,
     "topic": "",
     "en": {
      "title": "Demo Title",
      "body": "Plan ahead, label every box, protect fragile items, book your mover 3 days early. Close water and electricity on move day."
     },
     "ar": {
      "title": "Demo Title",
      "body": "خطط مسبقاً، سمّ الصناديق، احمِ الأغراض الهشة، واحجز الناقل قبل 3 أيام."
     }
    }
   ],
   "chip": {
    "en": "Run autopilot",
    "ar": "شغّل النشر التلقائي"
   }
  },
  "liveMap": [
   {
    "id": "DEMO-0049",
    "plate": "DEMO-0050",
    "name": "Demo Name",
    "type": "Box Truck",
    "status": "active",
    "fuelLevel": 100,
    "gps": {
     "lat": 26.2075,
     "lng": 50.5906,
     "location": "Demo Location"
    },
    "driver": "Unassigned",
    "trip": null,
    "idleMins": 0,
    "tripKm": 0
   },
   {
    "id": "DEMO-0051",
    "plate": "DEMO-0052",
    "name": "Demo Name",
    "type": "Box Truck",
    "status": "active",
    "fuelLevel": 78,
    "gps": {
     "lat": 26.2,
     "lng": 50.5,
     "location": "Demo Location"
    },
    "driver": "Hassan Al-Khalifa",
    "trip": {
     "code": "DEMO-0053",
     "destination": "Demo Destination",
     "dest": null,
     "live": null,
     "stage": null,
     "stages": [],
     "kmToGo": null,
     "etaMin": null
    },
    "idleMins": 0,
    "tripKm": 12.1
   },
   {
    "id": "DEMO-0054",
    "plate": "DEMO-0055",
    "name": "Demo Name",
    "type": "Flatbed",
    "status": "on-trip",
    "fuelLevel": 41,
    "gps": {
     "lat": 26.2286,
     "lng": 50.6017,
     "location": "Demo Location"
    },
    "driver": "Ravi Menon",
    "trip": null,
    "idleMins": 0,
    "tripKm": 15.2
   },
   {
    "id": "DEMO-0056",
    "plate": "DEMO-0057",
    "name": "Demo Name",
    "type": "Cargo Van",
    "status": "active",
    "fuelLevel": 92,
    "gps": {
     "lat": 26.2361,
     "lng": 50.536,
     "location": "Demo Location"
    },
    "driver": "Fatima Al-Dosari",
    "trip": null,
    "idleMins": 0,
    "tripKm": 0
   },
   {
    "id": "DEMO-0058",
    "plate": "DEMO-0059",
    "name": "Demo Name",
    "type": "Trailer",
    "status": "maintenance",
    "fuelLevel": 22,
    "gps": {
     "lat": 26.1702,
     "lng": 50.547,
     "location": "Demo Location"
    },
    "driver": "Unassigned",
    "trip": null,
    "idleMins": 0,
    "tripKm": 0
   },
   {
    "id": "DEMO-0060",
    "plate": "DEMO-0061",
    "name": "Demo Name",
    "type": "Bus",
    "status": "idle",
    "fuelLevel": 64,
    "gps": {
     "lat": 26.2128,
     "lng": 50.6872,
     "location": "Demo Location"
    },
    "driver": "Yusuf Ibrahim",
    "trip": {
     "code": "DEMO-0062",
     "destination": "Demo Destination",
     "dest": null,
     "live": null,
     "stage": null,
     "stages": [],
     "kmToGo": null,
     "etaMin": null
    },
    "idleMins": 0,
    "tripKm": 0
   },
   {
    "id": "DEMO-0063",
    "plate": "DEMO-0064",
    "name": "Demo Name",
    "type": "Pickup",
    "status": "active",
    "fuelLevel": 55,
    "gps": {
     "lat": 26.2442,
     "lng": 50.611,
     "location": "Demo Location"
    },
    "driver": "Noura Al-Mannai",
    "trip": null,
    "idleMins": 0,
    "tripKm": 0
   },
   {
    "id": "DEMO-0065",
    "plate": "DEMO-0066",
    "name": "Demo Name",
    "type": "Reefer",
    "status": "on-trip",
    "fuelLevel": 37,
    "gps": {
     "lat": 26.142,
     "lng": 50.65,
     "location": "Demo Location"
    },
    "driver": "Ahmed Qureshi",
    "trip": {
     "code": "DEMO-0067",
     "destination": "Demo Destination",
     "dest": null,
     "live": null,
     "stage": "delivery",
     "stages": [],
     "kmToGo": null,
     "etaMin": null
    },
    "idleMins": 42,
    "tripKm": 0
   },
   {
    "id": "DEMO-0068",
    "plate": "DEMO-0069",
    "name": "Demo Name",
    "type": "Bus",
    "status": "idle",
    "fuelLevel": 81,
    "gps": {
     "lat": 26.207,
     "lng": 50.5912,
     "location": "Demo Location"
    },
    "driver": "Unassigned",
    "trip": null,
    "idleMins": 0,
    "tripKm": 0
   }
  ],
  "stageCounts": {
   "completedToday": 2,
   "pickup": 1,
   "loading": 0,
   "transit": 0,
   "delivery": 1
  },
  "hq": {
   "lat": 26.2075,
   "lng": 50.5906,
   "location": "Demo Location"
  },
  "recentTrips": [
   {
    "id": "DEMO-0070",
    "code": "DEMO-0071",
    "type": "Movers & Packers",
    "customer": "Demo Customer",
    "origin": "Demo Origin",
    "destination": "Demo Destination",
    "vehicleId": null,
    "driverId": null,
    "status": "in-progress",
    "stage": "pickup",
    "stages": [
     {
      "stage": "pickup",
      "at": "+973 3935 0330",
      "by": "office"
     }
    ],
    "scheduledAt": "+973 3935 0330",
    "startedAt": null,
    "eta": null,
    "distanceKm": 0,
    "distanceTravelled": 0,
    "kmToGo": null,
    "etaMin": null,
    "fare": 168.96,
    "cargo": "12 items from move MV-2403",
    "customerPhone": "9735000",
    "moveId": "mv-30a7a4c6",
    "vehicle": null,
    "driver": null
   },
   {
    "id": "DEMO-0072",
    "code": "DEMO-0073",
    "type": "Residential",
    "customer": "Demo Customer",
    "origin": "Demo Origin",
    "destination": "Demo Destination",
    "vehicleId": "veh-002",
    "driverId": "drv-002",
    "status": "completed",
    "stage": "completed",
    "stages": [
     {
      "stage": "pickup",
      "at": "+973 3935 0330",
      "by": "office"
     },
     {
      "stage": "loading",
      "at": "+973 3935 0330",
      "by": "office"
     },
     {
      "stage": "transit",
      "at": "+973 3935 0330",
      "by": "office"
     },
     {
      "stage": "delivery",
      "at": "+973 3935 0330",
      "by": "gps"
     },
     {
      "stage": "completed",
      "at": "+973 3935 0330",
      "by": "office"
     }
    ],
    "scheduledAt": "+973 3935 0330",
    "startedAt": "+973 3935 0330",
    "eta": null,
    "distanceKm": 0,
    "distanceTravelled": 15.206018989723434,
    "kmToGo": 0,
    "etaMin": 1,
    "fare": 40,
    "cargo": "",
    "customerPhone": "",
    "dest": {
     "link": "demo@redsuntransport.bh",
     "lat": 26.2286,
     "lng": 50.6017
    },
    "completedAt": "+973 3935 0330",
    "live": null,
    "vehicle": {
     "id": "DEMO-0074",
     "plate": "DEMO-0075",
     "name": "Demo Name",
     "type": "Flatbed",
     "make": "Hino",
     "model": "500 Series",
     "year": 2021,
     "capacity": "12 tons",
     "status": "on-trip",
     "fuelLevel": 41,
     "odometer": 126440,
     "gps": {
      "lat": 26.2286,
      "lng": 50.6017,
      "location": "Demo Location"
     },
     "assignedDriverId": "drv-002",
     "insuranceExpiry": "+973 3935 0330",
     "registrationExpiry": "+973 3935 0330",
     "lastService": "+973 3935 0330",
     "nextServiceDue": "+973 3935 0330",
     "notes": "Demo reference entry",
     "driver": {
      "id": "DEMO-0076",
      "name": "Demo Name",
      "phone": "+973 3935 0330",
      "licenseNo": "DEMO-0077",
      "licenseClass": "Heavy Articulated",
      "licenseExpiry": "+973 3935 0330",
      "status": "on-duty",
      "assignedVehicleId": "veh-002",
      "rating": 4.8,
      "tripsCompleted": 538,
      "hoursThisWeek": 41,
      "cpr": "+973 3935 0330",
      "joinDate": "+973 3935 0330",
      "emergencyContact": "+973 3935 0330"
     },
     "insuranceDays": 44,
     "registrationDays": 120,
     "serviceDays": 4,
     "home": null,
     "tripKm": 15.206018989723434,
     "idleMins": 0
    },
    "driver": {
     "id": "DEMO-0078",
     "name": "Demo Name",
     "phone": "+973 3935 0330",
     "licenseNo": "DEMO-0079",
     "licenseClass": "Heavy Articulated",
     "licenseExpiry": "+973 3935 0330",
     "status": "on-duty",
     "assignedVehicleId": "veh-002",
     "rating": 4.8,
     "tripsCompleted": 538,
     "hoursThisWeek": 41,
     "cpr": "+973 3935 0330",
     "joinDate": "+973 3935 0330",
     "emergencyContact": "+973 3935 0330",
     "vehicle": {
      "id": "DEMO-0080",
      "plate": "DEMO-0081",
      "name": "Demo Name",
      "type": "Flatbed",
      "make": "Hino",
      "model": "500 Series",
      "year": 2021,
      "capacity": "12 tons",
      "status": "on-trip",
      "fuelLevel": 41,
      "odometer": 126440,
      "gps": {
       "lat": 26.2285,
       "lng": 50.586,
       "location": "Demo Location"
      },
      "assignedDriverId": "drv-002",
      "insuranceExpiry": "+973 3935 0330",
      "registrationExpiry": "+973 3935 0330",
      "lastService": "+973 3935 0330",
      "nextServiceDue": "+973 3935 0330",
      "notes": "Demo reference entry"
     },
     "licenseDays": 22,
     "baseSalary": 700
    }
   },
   {
    "id": "DEMO-0082",
    "code": "DEMO-0083",
    "type": "Commercial",
    "customer": "Demo Customer",
    "origin": "Demo Origin",
    "destination": "Demo Destination",
    "vehicleId": "veh-002",
    "driverId": "drv-002",
    "status": "cancelled",
    "stage": "cancelled",
    "stages": [
     {
      "stage": "pickup",
      "at": "+973 3935 0330",
      "by": "office"
     }
    ],
    "scheduledAt": "+973 3935 0330",
    "startedAt": null,
    "eta": null,
    "distanceKm": 0,
    "distanceTravelled": 0,
    "kmToGo": 1.1,
    "etaMin": 4,
    "fare": 50,
    "cargo": "",
    "customerPhone": "",
    "dest": {
     "link": "https://www.google.com/maps?q=26.1035,50.5600",
     "lat": 26.1035,
     "lng": 50.56
    },
    "live": null,
    "vehicle": {
     "id": "DEMO-0084",
     "plate": "DEMO-0085",
     "name": "Demo Name",
     "type": "Flatbed",
     "make": "Hino",
     "model": "500 Series",
     "year": 2021,
     "capacity": "12 tons",
     "status": "on-trip",
     "fuelLevel": 41,
     "odometer": 126440,
     "gps": {
      "lat": 26.2286,
      "lng": 50.6017,
      "location": "Demo Location"
     },
     "assignedDriverId": "drv-002",
     "insuranceExpiry": "+973 3935 0330",
     "registrationExpiry": "+973 3935 0330",
     "lastService": "+973 3935 0330",
     "nextServiceDue": "+973 3935 0330",
     "notes": "Demo reference entry",
     "driver": {
      "id": "DEMO-0086",
      "name": "Demo Name",
      "phone": "+973 3935 0330",
      "licenseNo": "DEMO-0087",
      "licenseClass": "Heavy Articulated",
      "licenseExpiry": "+973 3935 0330",
      "status": "on-duty",
      "assignedVehicleId": "veh-002",
      "rating": 4.8,
      "tripsCompleted": 538,
      "hoursThisWeek": 41,
      "cpr": "+973 3935 0330",
      "joinDate": "+973 3935 0330",
      "emergencyContact": "+973 3935 0330"
     },
     "insuranceDays": 44,
     "registrationDays": 120,
     "serviceDays": 4,
     "home": null,
     "tripKm": 15.206018989723434,
     "idleMins": 0
    },
    "driver": {
     "id": "DEMO-0088",
     "name": "Demo Name",
     "phone": "+973 3935 0330",
     "licenseNo": "DEMO-0089",
     "licenseClass": "Heavy Articulated",
     "licenseExpiry": "+973 3935 0330",
     "status": "on-duty",
     "assignedVehicleId": "veh-002",
     "rating": 4.8,
     "tripsCompleted": 538,
     "hoursThisWeek": 41,
     "cpr": "+973 3935 0330",
     "joinDate": "+973 3935 0330",
     "emergencyContact": "+973 3935 0330",
     "vehicle": {
      "id": "DEMO-0090",
      "plate": "DEMO-0091",
      "name": "Demo Name",
      "type": "Flatbed",
      "make": "Hino",
      "model": "500 Series",
      "year": 2021,
      "capacity": "12 tons",
      "status": "on-trip",
      "fuelLevel": 41,
      "odometer": 126440,
      "gps": {
       "lat": 26.2285,
       "lng": 50.586,
       "location": "Demo Location"
      },
      "assignedDriverId": "drv-002",
      "insuranceExpiry": "+973 3935 0330",
      "registrationExpiry": "+973 3935 0330",
      "lastService": "+973 3935 0330",
      "nextServiceDue": "+973 3935 0330",
      "notes": "Demo reference entry"
     },
     "licenseDays": 22,
     "baseSalary": 700
    }
   },
   {
    "id": "DEMO-0092",
    "code": "DEMO-0093",
    "type": "Residential",
    "customer": "Demo Customer",
    "origin": "Demo Origin",
    "destination": "Demo Destination",
    "vehicleId": "veh-002",
    "driverId": "drv-002",
    "status": "cancelled",
    "stage": "cancelled",
    "stages": [
     {
      "stage": "pickup",
      "at": "+973 3935 0330",
      "by": "office"
     },
     {
      "stage": "loading",
      "at": "+973 3935 0330",
      "by": "office"
     },
     {
      "stage": "transit",
      "at": "+973 3935 0330",
      "by": "office"
     },
     {
      "stage": "delivery",
      "at": "+973 3935 0330",
      "by": "office"
     },
     {
      "stage": "completed",
      "at": "+973 3935 0330",
      "by": "office"
     }
    ],
    "scheduledAt": "+973 3935 0330",
    "startedAt": "+973 3935 0330",
    "eta": null,
    "distanceKm": 0,
    "distanceTravelled": 0,
    "kmToGo": null,
    "etaMin": null,
    "fare": 40,
    "cargo": "",
    "customerPhone": "",
    "completedAt": "+973 3935 0330",
    "live": null,
    "vehicle": {
     "id": "DEMO-0094",
     "plate": "DEMO-0095",
     "name": "Demo Name",
     "type": "Flatbed",
     "make": "Hino",
     "model": "500 Series",
     "year": 2021,
     "capacity": "12 tons",
     "status": "on-trip",
     "fuelLevel": 41,
     "odometer": 126440,
     "gps": {
      "lat": 26.2286,
      "lng": 50.6017,
      "location": "Demo Location"
     },
     "assignedDriverId": "drv-002",
     "insuranceExpiry": "+973 3935 0330",
     "registrationExpiry": "+973 3935 0330",
     "lastService": "+973 3935 0330",
     "nextServiceDue": "+973 3935 0330",
     "notes": "Demo reference entry",
     "driver": {
      "id": "DEMO-0096",
      "name": "Demo Name",
      "phone": "+973 3935 0330",
      "licenseNo": "DEMO-0097",
      "licenseClass": "Heavy Articulated",
      "licenseExpiry": "+973 3935 0330",
      "status": "on-duty",
      "assignedVehicleId": "veh-002",
      "rating": 4.8,
      "tripsCompleted": 538,
      "hoursThisWeek": 41,
      "cpr": "+973 3935 0330",
      "joinDate": "+973 3935 0330",
      "emergencyContact": "+973 3935 0330"
     },
     "insuranceDays": 44,
     "registrationDays": 120,
     "serviceDays": 4,
     "home": null,
     "tripKm": 15.206018989723434,
     "idleMins": 0
    },
    "driver": {
     "id": "DEMO-0098",
     "name": "Demo Name",
     "phone": "+973 3935 0330",
     "licenseNo": "DEMO-0099",
     "licenseClass": "Heavy Articulated",
     "licenseExpiry": "+973 3935 0330",
     "status": "on-duty",
     "assignedVehicleId": "veh-002",
     "rating": 4.8,
     "tripsCompleted": 538,
     "hoursThisWeek": 41,
     "cpr": "+973 3935 0330",
     "joinDate": "+973 3935 0330",
     "emergencyContact": "+973 3935 0330",
     "vehicle": {
      "id": "DEMO-0100",
      "plate": "DEMO-0101",
      "name": "Demo Name",
      "type": "Flatbed",
      "make": "Hino",
      "model": "500 Series",
      "year": 2021,
      "capacity": "12 tons",
      "status": "on-trip",
      "fuelLevel": 41,
      "odometer": 126440,
      "gps": {
       "lat": 26.2285,
       "lng": 50.586,
       "location": "Demo Location"
      },
      "assignedDriverId": "drv-002",
      "insuranceExpiry": "+973 3935 0330",
      "registrationExpiry": "+973 3935 0330",
      "lastService": "+973 3935 0330",
      "nextServiceDue": "+973 3935 0330",
      "notes": "Demo reference entry"
     },
     "licenseDays": 22,
     "baseSalary": 700
    }
   },
   {
    "id": "DEMO-0102",
    "code": "DEMO-0103",
    "type": "Residential",
    "customer": "Demo Customer",
    "origin": "Demo Origin",
    "destination": "Demo Destination",
    "vehicleId": "veh-001",
    "driverId": "drv-001",
    "status": "cancelled",
    "stage": "cancelled",
    "stages": [
     {
      "stage": "delivery",
      "at": "+973 3935 0330",
      "by": "gps"
     }
    ],
    "scheduledAt": "+973 3935 0330",
    "startedAt": null,
    "eta": null,
    "distanceKm": 0,
    "distanceTravelled": 0,
    "kmToGo": 0,
    "etaMin": 1,
    "fare": 45,
    "cargo": "",
    "customerPhone": "",
    "dest": {
     "link": "demo@redsuntransport.bh",
     "lat": 26.1034,
     "lng": 50.5551
    },
    "live": null,
    "vehicle": {
     "id": "DEMO-0104",
     "plate": "DEMO-0105",
     "name": "Demo Name",
     "type": "Box Truck",
     "make": "Isuzu",
     "model": "NPR 75",
     "year": 2022,
     "capacity": "5.5 tons",
     "status": "active",
     "fuelLevel": 78,
     "odometer": 84210,
     "gps": {
      "lat": 26.2,
      "lng": 50.5,
      "location": "Demo Location"
     },
     "assignedDriverId": "drv-001",
     "insuranceExpiry": "+973 3935 0330",
     "registrationExpiry": "+973 3935 0330",
     "lastService": "+973 3935 0330",
     "nextServiceDue": "+973 3935 0330",
     "notes": "Demo reference entry",
     "driver": {
      "id": "DEMO-0106",
      "name": "Demo Name",
      "phone": "+973 3935 0330",
      "licenseNo": "DEMO-0107",
      "licenseClass": "Heavy",
      "licenseExpiry": "+973 3935 0330",
      "status": "on-duty",
      "assignedVehicleId": "veh-001",
      "rating": 4.9,
      "tripsCompleted": 412,
      "hoursThisWeek": 38,
      "cpr": "+973 3935 0330",
      "joinDate": "+973 3935 0330",
      "emergencyContact": "+973 3935 0330"
     },
     "insuranceDays": 96,
     "registrationDays": 210,
     "serviceDays": 18,
     "home": {
      "lat": 26.2075,
      "lng": 50.5906,
      "location": "Demo Location"
     },
     "idleMins": 0,
     "tripKm": 12.053043054654875,
     "photo": null
    },
    "driver": {
     "id": "DEMO-0108",
     "name": "Demo Name",
     "phone": "+973 3935 0330",
     "licenseNo": "DEMO-0109",
     "licenseClass": "Heavy",
     "licenseExpiry": "+973 3935 0330",
     "status": "on-duty",
     "assignedVehicleId": "veh-001",
     "rating": 4.9,
     "tripsCompleted": 412,
     "hoursThisWeek": 38,
     "cpr": "+973 3935 0330",
     "joinDate": "+973 3935 0330",
     "emergencyContact": "+973 3935 0330",
     "vehicle": {
      "id": "DEMO-0110",
      "plate": "DEMO-0111",
      "name": "Demo Name",
      "type": "Box Truck",
      "make": "Isuzu",
      "model": "NPR 75",
      "year": 2022,
      "capacity": "5.5 tons",
      "status": "active",
      "fuelLevel": 78,
      "odometer": 84210,
      "gps": {
       "lat": 26.2075,
       "lng": 50.5906,
       "location": "Demo Location"
      },
      "assignedDriverId": "drv-001",
      "insuranceExpiry": "+973 3935 0330",
      "registrationExpiry": "+973 3935 0330",
      "lastService": "+973 3935 0330",
      "nextServiceDue": "+973 3935 0330",
      "notes": "Demo reference entry"
     },
     "licenseDays": 140,
     "photo": null,
     "documents": []
    }
   },
   {
    "id": "DEMO-0112",
    "code": "DEMO-0113",
    "type": "Residential",
    "customer": "Demo Customer",
    "origin": "Demo Origin",
    "destination": "Demo Destination",
    "vehicleId": "veh-001",
    "driverId": "drv-001",
    "status": "in-progress",
    "scheduledAt": "+973 3935 0330",
    "startedAt": "+973 3935 0330",
    "eta": "+973 3935 0330",
    "distanceKm": 28,
    "fare": 185,
    "cargo": "4BR villa furniture + carpentry",
    "vehicle": {
     "id": "DEMO-0114",
     "plate": "DEMO-0115",
     "name": "Demo Name",
     "type": "Box Truck",
     "make": "Isuzu",
     "model": "NPR 75",
     "year": 2022,
     "capacity": "5.5 tons",
     "status": "active",
     "fuelLevel": 78,
     "odometer": 84210,
     "gps": {
      "lat": 26.2,
      "lng": 50.5,
      "location": "Demo Location"
     },
     "assignedDriverId": "drv-001",
     "insuranceExpiry": "+973 3935 0330",
     "registrationExpiry": "+973 3935 0330",
     "lastService": "+973 3935 0330",
     "nextServiceDue": "+973 3935 0330",
     "notes": "Demo reference entry",
     "driver": {
      "id": "DEMO-0116",
      "name": "Demo Name",
      "phone": "+973 3935 0330",
      "licenseNo": "DEMO-0117",
      "licenseClass": "Heavy",
      "licenseExpiry": "+973 3935 0330",
      "status": "on-duty",
      "assignedVehicleId": "veh-001",
      "rating": 4.9,
      "tripsCompleted": 412,
      "hoursThisWeek": 38,
      "cpr": "+973 3935 0330",
      "joinDate": "+973 3935 0330",
      "emergencyContact": "+973 3935 0330"
     },
     "insuranceDays": 96,
     "registrationDays": 210,
     "serviceDays": 18,
     "home": {
      "lat": 26.2075,
      "lng": 50.5906,
      "location": "Demo Location"
     },
     "idleMins": 0,
     "tripKm": 12.053043054654875,
     "photo": null
    },
    "driver": {
     "id": "DEMO-0118",
     "name": "Demo Name",
     "phone": "+973 3935 0330",
     "licenseNo": "DEMO-0119",
     "licenseClass": "Heavy",
     "licenseExpiry": "+973 3935 0330",
     "status": "on-duty",
     "assignedVehicleId": "veh-001",
     "rating": 4.9,
     "tripsCompleted": 412,
     "hoursThisWeek": 38,
     "cpr": "+973 3935 0330",
     "joinDate": "+973 3935 0330",
     "emergencyContact": "+973 3935 0330",
     "vehicle": {
      "id": "DEMO-0120",
      "plate": "DEMO-0121",
      "name": "Demo Name",
      "type": "Box Truck",
      "make": "Isuzu",
      "model": "NPR 75",
      "year": 2022,
      "capacity": "5.5 tons",
      "status": "active",
      "fuelLevel": 78,
      "odometer": 84210,
      "gps": {
       "lat": 26.2075,
       "lng": 50.5906,
       "location": "Demo Location"
      },
      "assignedDriverId": "drv-001",
      "insuranceExpiry": "+973 3935 0330",
      "registrationExpiry": "+973 3935 0330",
      "lastService": "+973 3935 0330",
      "nextServiceDue": "+973 3935 0330",
      "notes": "Demo reference entry"
     },
     "licenseDays": 140,
     "photo": null,
     "documents": []
    },
    "live": null,
    "dest": null,
    "distanceTravelled": 12.053043054654875
   }
  ]
 },
 "/api/vehicles": [
  {
   "id": "DEMO-0122",
   "plate": "DEMO-0123",
   "name": "Demo Name",
   "type": "Box Truck",
   "make": "Isuzu",
   "model": "NPR75",
   "year": 2026,
   "capacity": "",
   "status": "active",
   "fuelLevel": 100,
   "odometer": 0,
   "gps": {
    "lat": 26.2075,
    "lng": 50.5906,
    "location": "Demo Location"
   },
   "assignedDriverId": null,
   "insuranceExpiry": "+973 3935 0330",
   "registrationExpiry": "+973 3935 0330",
   "lastService": "+973 3935 0330",
   "nextServiceDue": "+973 3935 0330",
   "notes": "",
   "driver": null,
   "insuranceDays": 363,
   "registrationDays": 363,
   "serviceDays": 88,
   "home": {
    "lat": 26.2075,
    "lng": 50.5906,
    "location": "Demo Location"
   },
   "inspectionDays": null,
   "permitDays": null,
   "leaseDays": null
  },
  {
   "id": "DEMO-0124",
   "plate": "DEMO-0125",
   "name": "Demo Name",
   "type": "Box Truck",
   "make": "Isuzu",
   "model": "NPR 75",
   "year": 2022,
   "capacity": "5.5 tons",
   "status": "active",
   "fuelLevel": 78,
   "odometer": 84210,
   "gps": {
    "lat": 26.2,
    "lng": 50.5,
    "location": "Demo Location"
   },
   "assignedDriverId": "drv-001",
   "insuranceExpiry": "+973 3935 0330",
   "registrationExpiry": "+973 3935 0330",
   "lastService": "+973 3935 0330",
   "nextServiceDue": "+973 3935 0330",
   "notes": "Demo reference entry",
   "driver": {
    "id": "DEMO-0126",
    "name": "Demo Name",
    "phone": "+973 3935 0330",
    "licenseNo": "DEMO-0127",
    "licenseClass": "Heavy",
    "licenseExpiry": "+973 3935 0330",
    "status": "on-duty",
    "assignedVehicleId": "veh-001",
    "rating": 4.9,
    "tripsCompleted": 412,
    "hoursThisWeek": 38,
    "cpr": "+973 3935 0330",
    "joinDate": "+973 3935 0330",
    "emergencyContact": "+973 3935 0330",
    "vehicle": {
     "id": "DEMO-0128",
     "plate": "DEMO-0129",
     "name": "Demo Name",
     "type": "Box Truck",
     "make": "Isuzu",
     "model": "NPR 75",
     "year": 2022,
     "capacity": "5.5 tons",
     "status": "active",
     "fuelLevel": 78,
     "odometer": 84210,
     "gps": {
      "lat": 26.2075,
      "lng": 50.5906,
      "location": "Demo Location"
     },
     "assignedDriverId": "drv-001",
     "insuranceExpiry": "+973 3935 0330",
     "registrationExpiry": "+973 3935 0330",
     "lastService": "+973 3935 0330",
     "nextServiceDue": "+973 3935 0330",
     "notes": "Demo reference entry"
    },
    "licenseDays": 140,
    "photo": null,
    "documents": []
   },
   "insuranceDays": 94,
   "registrationDays": 208,
   "serviceDays": 16,
   "home": {
    "lat": 26.2075,
    "lng": 50.5906,
    "location": "Demo Location"
   },
   "idleMins": 0,
   "tripKm": 12.053043054654875,
   "photo": null,
   "inspectionDays": null,
   "permitDays": null,
   "leaseDays": null
  },
  {
   "id": "DEMO-0130",
   "plate": "DEMO-0131",
   "name": "Demo Name",
   "type": "Flatbed",
   "make": "Hino",
   "model": "500 Series",
   "year": 2021,
   "capacity": "12 tons",
   "status": "on-trip",
   "fuelLevel": 41,
   "odometer": 126440,
   "gps": {
    "lat": 26.2286,
    "lng": 50.6017,
    "location": "Demo Location"
   },
   "assignedDriverId": "drv-002",
   "insuranceExpiry": "+973 3935 0330",
   "registrationExpiry": "+973 3935 0330",
   "lastService": "+973 3935 0330",
   "nextServiceDue": "+973 3935 0330",
   "notes": "Demo reference entry",
   "driver": {
    "id": "DEMO-0132",
    "name": "Demo Name",
    "phone": "+973 3935 0330",
    "licenseNo": "DEMO-0133",
    "licenseClass": "Heavy Articulated",
    "licenseExpiry": "+973 3935 0330",
    "status": "on-duty",
    "assignedVehicleId": "veh-002",
    "rating": 4.8,
    "tripsCompleted": 538,
    "hoursThisWeek": 41,
    "cpr": "+973 3935 0330",
    "joinDate": "+973 3935 0330",
    "emergencyContact": "+973 3935 0330",
    "vehicle": {
     "id": "DEMO-0134",
     "plate": "DEMO-0135",
     "name": "Demo Name",
     "type": "Flatbed",
     "make": "Hino",
     "model": "500 Series",
     "year": 2021,
     "capacity": "12 tons",
     "status": "on-trip",
     "fuelLevel": 41,
     "odometer": 126440,
     "gps": {
      "lat": 26.2285,
      "lng": 50.586,
      "location": "Demo Location"
     },
     "assignedDriverId": "drv-002",
     "insuranceExpiry": "+973 3935 0330",
     "registrationExpiry": "+973 3935 0330",
     "lastService": "+973 3935 0330",
     "nextServiceDue": "+973 3935 0330",
     "notes": "Demo reference entry"
    },
    "licenseDays": 22,
    "baseSalary": 700
   },
   "insuranceDays": 42,
   "registrationDays": 118,
   "serviceDays": 2,
   "home": null,
   "tripKm": 15.206018989723434,
   "idleMins": 0,
   "inspectionDays": null,
   "permitDays": null,
   "leaseDays": null
  },
  {
   "id": "DEMO-0136",
   "plate": "DEMO-0137",
   "name": "Demo Name",
   "type": "Cargo Van",
   "make": "Mercedes-Benz",
   "model": "Sprinter 316",
   "year": 2023,
   "capacity": "1.8 tons",
   "status": "active",
   "fuelLevel": 92,
   "odometer": 31880,
   "gps": {
    "lat": 26.2361,
    "lng": 50.536,
    "location": "Demo Location"
   },
   "assignedDriverId": "drv-003",
   "insuranceExpiry": "+973 3935 0330",
   "registrationExpiry": "+973 3935 0330",
   "lastService": "+973 3935 0330",
   "nextServiceDue": "+973 3935 0330",
   "notes": "Demo reference entry",
   "driver": {
    "id": "DEMO-0138",
    "name": "Demo Name",
    "phone": "+973 3935 0330",
    "licenseNo": "DEMO-0139",
    "licenseClass": "Light Commercial",
    "licenseExpiry": "+973 3935 0330",
    "status": "on-duty",
    "assignedVehicleId": "veh-003",
    "rating": 5,
    "tripsCompleted": 198,
    "hoursThisWeek": 32,
    "cpr": "+973 3935 0330",
    "joinDate": "+973 3935 0330",
    "emergencyContact": "+973 3935 0330",
    "vehicle": {
     "id": "DEMO-0140",
     "plate": "DEMO-0141",
     "name": "Demo Name",
     "type": "Cargo Van",
     "make": "Mercedes-Benz",
     "model": "Sprinter 316",
     "year": 2023,
     "capacity": "1.8 tons",
     "status": "active",
     "fuelLevel": 92,
     "odometer": 31880,
     "gps": {
      "lat": 26.2361,
      "lng": 50.536,
      "location": "Demo Location"
     },
     "assignedDriverId": "drv-003",
     "insuranceExpiry": "+973 3935 0330",
     "registrationExpiry": "+973 3935 0330",
     "lastService": "+973 3935 0330",
     "nextServiceDue": "+973 3935 0330",
     "notes": "Demo reference entry"
    },
    "licenseDays": 200
   },
   "insuranceDays": 178,
   "registrationDays": 298,
   "serviceDays": 46,
   "home": {
    "lat": 26.2361,
    "lng": 50.536,
    "location": "Demo Location"
   },
   "inspectionDays": null,
   "permitDays": null,
   "leaseDays": null
  },
  {
   "id": "DEMO-0142",
   "plate": "DEMO-0143",
   "name": "Demo Name",
   "type": "Trailer",
   "make": "Volvo",
   "model": "FH16",
   "year": 2020,
   "capacity": "24 tons",
   "status": "maintenance",
   "fuelLevel": 22,
   "odometer": 214900,
   "gps": {
    "lat": 26.1702,
    "lng": 50.547,
    "location": "Demo Location"
   },
   "assignedDriverId": null,
   "insuranceExpiry": "+973 3935 0330",
   "registrationExpiry": "+973 3935 0330",
   "lastService": "+973 3935 0330",
   "nextServiceDue": "+973 3935 0330",
   "notes": "Demo reference entry",
   "driver": null,
   "insuranceDays": 10,
   "registrationDays": 53,
   "serviceDays": 26,
   "home": {
    "lat": 26.1702,
    "lng": 50.547,
    "location": "Demo Location"
   },
   "inspectionDays": null,
   "permitDays": null,
   "leaseDays": null
  },
  {
   "id": "DEMO-0144",
   "plate": "DEMO-0145",
   "name": "Demo Name",
   "type": "Bus",
   "make": "Yutong",
   "model": "ZK6122H",
   "year": 2019,
   "capacity": "45 seats",
   "status": "idle",
   "fuelLevel": 64,
   "odometer": 178220,
   "gps": {
    "lat": 26.2128,
    "lng": 50.6872,
    "location": "Demo Location"
   },
   "assignedDriverId": "drv-005",
   "insuranceExpiry": "+973 3935 0330",
   "registrationExpiry": "+973 3935 0330",
   "lastService": "+973 3935 0330",
   "nextServiceDue": "+973 3935 0330",
   "notes": "Demo reference entry",
   "driver": {
    "id": "DEMO-0146",
    "name": "Demo Name",
    "phone": "+973 3935 0330",
    "licenseNo": "DEMO-0147",
    "licenseClass": "Passenger Bus",
    "licenseExpiry": "+973 3935 0330",
    "status": "standby",
    "assignedVehicleId": "veh-005",
    "rating": 4.6,
    "tripsCompleted": 267,
    "hoursThisWeek": 18,
    "cpr": "+973 3935 0330",
    "joinDate": "+973 3935 0330",
    "emergencyContact": "+973 3935 0330",
    "vehicle": {
     "id": "DEMO-0148",
     "plate": "DEMO-0149",
     "name": "Demo Name",
     "type": "Bus",
     "make": "Yutong",
     "model": "ZK6122H",
     "year": 2019,
     "capacity": "45 seats",
     "status": "idle",
     "fuelLevel": 64,
     "odometer": 178220,
     "gps": {
      "lat": 26.2128,
      "lng": 50.6872,
      "location": "Demo Location"
     },
     "assignedDriverId": "drv-005",
     "insuranceExpiry": "+973 3935 0330",
     "registrationExpiry": "+973 3935 0330",
     "lastService": "+973 3935 0330",
     "nextServiceDue": "+973 3935 0330",
     "notes": "Demo reference entry"
    },
    "licenseDays": 75,
    "baseSalary": 720
   },
   "insuranceDays": 68,
   "registrationDays": 138,
   "serviceDays": 13,
   "home": {
    "lat": 26.2128,
    "lng": 50.6872,
    "location": "Demo Location"
   },
   "inspectionDays": null,
   "permitDays": null,
   "leaseDays": null
  },
  {
   "id": "DEMO-0150",
   "plate": "DEMO-0151",
   "name": "Demo Name",
   "type": "Pickup",
   "make": "Toyota",
   "model": "Hilux",
   "year": 2024,
   "capacity": "1 ton",
   "status": "active",
   "fuelLevel": 55,
   "odometer": 12450,
   "gps": {
    "lat": 26.2442,
    "lng": 50.611,
    "location": "Demo Location"
   },
   "assignedDriverId": "drv-006",
   "insuranceExpiry": "+973 3935 0330",
   "registrationExpiry": "+973 3935 0330",
   "lastService": "+973 3935 0330",
   "nextServiceDue": "+973 3935 0330",
   "notes": "Demo reference entry",
   "driver": {
    "id": "DEMO-0152",
    "name": "Demo Name",
    "phone": "+973 3935 0330",
    "licenseNo": "DEMO-0153",
    "licenseClass": "Light Commercial",
    "licenseExpiry": "+973 3935 0330",
    "status": "on-duty",
    "assignedVehicleId": "veh-006",
    "rating": 4.9,
    "tripsCompleted": 88,
    "hoursThisWeek": 29,
    "cpr": "+973 3935 0330",
    "joinDate": "+973 3935 0330",
    "emergencyContact": "+973 3935 0330",
    "vehicle": {
     "id": "DEMO-0154",
     "plate": "DEMO-0155",
     "name": "Demo Name",
     "type": "Pickup",
     "make": "Toyota",
     "model": "Hilux",
     "year": 2024,
     "capacity": "1 ton",
     "status": "active",
     "fuelLevel": 55,
     "odometer": 12450,
     "gps": {
      "lat": 26.2442,
      "lng": 50.611,
      "location": "Demo Location"
     },
     "assignedDriverId": "drv-006",
     "insuranceExpiry": "+973 3935 0330",
     "registrationExpiry": "+973 3935 0330",
     "lastService": "+973 3935 0330",
     "nextServiceDue": "+973 3935 0330",
     "notes": "Demo reference entry"
    },
    "licenseDays": 310
   },
   "insuranceDays": 248,
   "registrationDays": 308,
   "serviceDays": 50,
   "home": {
    "lat": 26.2442,
    "lng": 50.611,
    "location": "Demo Location"
   },
   "inspectionDays": null,
   "permitDays": null,
   "leaseDays": null
  },
  {
   "id": "DEMO-0156",
   "plate": "DEMO-0157",
   "name": "Demo Name",
   "type": "Reefer",
   "make": "Mitsubishi",
   "model": "Fuso Canter",
   "year": 2022,
   "capacity": "3.5 tons",
   "status": "on-trip",
   "fuelLevel": 37,
   "odometer": 67210,
   "gps": {
    "lat": 26.142,
    "lng": 50.65,
    "location": "Demo Location"
   },
   "assignedDriverId": "drv-004",
   "insuranceExpiry": "+973 3935 0330",
   "registrationExpiry": "+973 3935 0330",
   "lastService": "+973 3935 0330",
   "nextServiceDue": "+973 3935 0330",
   "notes": "Demo reference entry",
   "driver": {
    "id": "DEMO-0158",
    "name": "Demo Name",
    "phone": "+973 3935 0330",
    "licenseNo": "DEMO-0159",
    "licenseClass": "Heavy",
    "licenseExpiry": "+973 3935 0330",
    "status": "on-duty",
    "assignedVehicleId": "veh-007",
    "rating": 4.7,
    "tripsCompleted": 301,
    "hoursThisWeek": 44,
    "cpr": "+973 3935 0330",
    "joinDate": "+973 3935 0330",
    "emergencyContact": "+973 3935 0330",
    "vehicle": {
     "id": "DEMO-0160",
     "plate": "DEMO-0161",
     "name": "Demo Name",
     "type": "Reefer",
     "make": "Mitsubishi",
     "model": "Fuso Canter",
     "year": 2022,
     "capacity": "3.5 tons",
     "status": "on-trip",
     "fuelLevel": 37,
     "odometer": 67210,
     "gps": {
      "lat": 26.142,
      "lng": 50.65,
      "location": "Demo Location"
     },
     "assignedDriverId": "drv-004",
     "insuranceExpiry": "+973 3935 0330",
     "registrationExpiry": "+973 3935 0330",
     "lastService": "+973 3935 0330",
     "nextServiceDue": "+973 3935 0330",
     "notes": "Demo reference entry"
    },
    "licenseDays": 9,
    "baseSalary": 650
   },
   "insuranceDays": 86,
   "registrationDays": 158,
   "serviceDays": 8,
   "home": {
    "lat": 26.142,
    "lng": 50.65,
    "location": "Demo Location"
   },
   "idleMins": 42,
   "inspectionDays": null,
   "permitDays": null,
   "leaseDays": null
  },
  {
   "id": "DEMO-0162",
   "plate": "DEMO-0163",
   "name": "Demo Name",
   "type": "Bus",
   "make": "Toyota",
   "model": "Coaster",
   "year": 2021,
   "capacity": "22 seats",
   "status": "idle",
   "fuelLevel": 81,
   "odometer": 90340,
   "gps": {
    "lat": 26.207,
    "lng": 50.5912,
    "location": "Demo Location"
   },
   "assignedDriverId": null,
   "insuranceExpiry": "+973 3935 0330",
   "registrationExpiry": "+973 3935 0330",
   "lastService": "+973 3935 0330",
   "nextServiceDue": "+973 3935 0330",
   "notes": "Demo reference entry",
   "driver": null,
   "insuranceDays": 17,
   "registrationDays": 88,
   "serviceDays": 23,
   "home": {
    "lat": 26.207,
    "lng": 50.5912,
    "location": "Demo Location"
   },
   "inspectionDays": null,
   "permitDays": null,
   "leaseDays": null
  }
 ],
 "/api/drivers": [
  {
   "id": "DEMO-0164",
   "name": "Demo Name",
   "phone": "+973 3935 0330",
   "licenseNo": "DEMO-0165",
   "licenseClass": "Heavy",
   "licenseExpiry": "+973 3935 0330",
   "status": "on-duty",
   "assignedVehicleId": "veh-001",
   "rating": 4.9,
   "tripsCompleted": 412,
   "hoursThisWeek": 38,
   "cpr": "+973 3935 0330",
   "joinDate": "+973 3935 0330",
   "emergencyContact": "+973 3935 0330",
   "vehicle": {
    "id": "DEMO-0166",
    "plate": "DEMO-0167",
    "name": "Demo Name",
    "type": "Box Truck",
    "make": "Isuzu",
    "model": "NPR 75",
    "year": 2022,
    "capacity": "5.5 tons",
    "status": "active",
    "fuelLevel": 78,
    "odometer": 84210,
    "gps": {
     "lat": 26.2,
     "lng": 50.5,
     "location": "Demo Location"
    },
    "assignedDriverId": "drv-001",
    "insuranceExpiry": "+973 3935 0330",
    "registrationExpiry": "+973 3935 0330",
    "lastService": "+973 3935 0330",
    "nextServiceDue": "+973 3935 0330",
    "notes": "Demo reference entry",
    "driver": {
     "id": "DEMO-0168",
     "name": "Demo Name",
     "phone": "+973 3935 0330",
     "licenseNo": "DEMO-0169",
     "licenseClass": "Heavy",
     "licenseExpiry": "+973 3935 0330",
     "status": "on-duty",
     "assignedVehicleId": "veh-001",
     "rating": 4.9,
     "tripsCompleted": 412,
     "hoursThisWeek": 38,
     "cpr": "+973 3935 0330",
     "joinDate": "+973 3935 0330",
     "emergencyContact": "+973 3935 0330"
    },
    "insuranceDays": 96,
    "registrationDays": 210,
    "serviceDays": 18,
    "home": {
     "lat": 26.2075,
     "lng": 50.5906,
     "location": "Demo Location"
    },
    "idleMins": 0,
    "tripKm": 12.053043054654875,
    "photo": null
   },
   "licenseDays": 251,
   "photo": null,
   "documents": []
  },
  {
   "id": "DEMO-0170",
   "name": "Demo Name",
   "phone": "+973 3935 0330",
   "licenseNo": "DEMO-0171",
   "licenseClass": "Heavy Articulated",
   "licenseExpiry": "+973 3935 0330",
   "status": "on-duty",
   "assignedVehicleId": "veh-002",
   "rating": 4.8,
   "tripsCompleted": 538,
   "hoursThisWeek": 41,
   "cpr": "+973 3935 0330",
   "joinDate": "+973 3935 0330",
   "emergencyContact": "+973 3935 0330",
   "vehicle": {
    "id": "DEMO-0172",
    "plate": "DEMO-0173",
    "name": "Demo Name",
    "type": "Flatbed",
    "make": "Hino",
    "model": "500 Series",
    "year": 2021,
    "capacity": "12 tons",
    "status": "on-trip",
    "fuelLevel": 41,
    "odometer": 126440,
    "gps": {
     "lat": 26.2286,
     "lng": 50.6017,
     "location": "Demo Location"
    },
    "assignedDriverId": "drv-002",
    "insuranceExpiry": "+973 3935 0330",
    "registrationExpiry": "+973 3935 0330",
    "lastService": "+973 3935 0330",
    "nextServiceDue": "+973 3935 0330",
    "notes": "Demo reference entry",
    "driver": {
     "id": "DEMO-0174",
     "name": "Demo Name",
     "phone": "+973 3935 0330",
     "licenseNo": "DEMO-0175",
     "licenseClass": "Heavy Articulated",
     "licenseExpiry": "+973 3935 0330",
     "status": "on-duty",
     "assignedVehicleId": "veh-002",
     "rating": 4.8,
     "tripsCompleted": 538,
     "hoursThisWeek": 41,
     "cpr": "+973 3935 0330",
     "joinDate": "+973 3935 0330",
     "emergencyContact": "+973 3935 0330"
    },
    "insuranceDays": 44,
    "registrationDays": 120,
    "serviceDays": 4,
    "home": null,
    "tripKm": 15.206018989723434,
    "idleMins": 0
   },
   "licenseDays": 20,
   "baseSalary": 700
  },
  {
   "id": "DEMO-0176",
   "name": "Demo Name",
   "phone": "+973 3935 0330",
   "licenseNo": "DEMO-0177",
   "licenseClass": "Light Commercial",
   "licenseExpiry": "+973 3935 0330",
   "status": "on-duty",
   "assignedVehicleId": "veh-003",
   "rating": 5,
   "tripsCompleted": 198,
   "hoursThisWeek": 32,
   "cpr": "+973 3935 0330",
   "joinDate": "+973 3935 0330",
   "emergencyContact": "+973 3935 0330",
   "vehicle": {
    "id": "DEMO-0178",
    "plate": "DEMO-0179",
    "name": "Demo Name",
    "type": "Cargo Van",
    "make": "Mercedes-Benz",
    "model": "Sprinter 316",
    "year": 2023,
    "capacity": "1.8 tons",
    "status": "active",
    "fuelLevel": 92,
    "odometer": 31880,
    "gps": {
     "lat": 26.2361,
     "lng": 50.536,
     "location": "Demo Location"
    },
    "assignedDriverId": "drv-003",
    "insuranceExpiry": "+973 3935 0330",
    "registrationExpiry": "+973 3935 0330",
    "lastService": "+973 3935 0330",
    "nextServiceDue": "+973 3935 0330",
    "notes": "Demo reference entry",
    "driver": {
     "id": "DEMO-0180",
     "name": "Demo Name",
     "phone": "+973 3935 0330",
     "licenseNo": "DEMO-0181",
     "licenseClass": "Light Commercial",
     "licenseExpiry": "+973 3935 0330",
     "status": "on-duty",
     "assignedVehicleId": "veh-003",
     "rating": 5,
     "tripsCompleted": 198,
     "hoursThisWeek": 32,
     "cpr": "+973 3935 0330",
     "joinDate": "+973 3935 0330",
     "emergencyContact": "+973 3935 0330"
    },
    "insuranceDays": 180,
    "registrationDays": 300,
    "serviceDays": 48,
    "home": {
     "lat": 26.2361,
     "lng": 50.536,
     "location": "Demo Location"
    }
   },
   "licenseDays": 198
  },
  {
   "id": "DEMO-0182",
   "name": "Demo Name",
   "phone": "+973 3935 0330",
   "licenseNo": "DEMO-0183",
   "licenseClass": "Heavy",
   "licenseExpiry": "+973 3935 0330",
   "status": "on-duty",
   "assignedVehicleId": "veh-007",
   "rating": 4.7,
   "tripsCompleted": 301,
   "hoursThisWeek": 44,
   "cpr": "+973 3935 0330",
   "joinDate": "+973 3935 0330",
   "emergencyContact": "+973 3935 0330",
   "vehicle": {
    "id": "DEMO-0184",
    "plate": "DEMO-0185",
    "name": "Demo Name",
    "type": "Reefer",
    "make": "Mitsubishi",
    "model": "Fuso Canter",
    "year": 2022,
    "capacity": "3.5 tons",
    "status": "on-trip",
    "fuelLevel": 37,
    "odometer": 67210,
    "gps": {
     "lat": 26.142,
     "lng": 50.65,
     "location": "Demo Location"
    },
    "assignedDriverId": "drv-004",
    "insuranceExpiry": "+973 3935 0330",
    "registrationExpiry": "+973 3935 0330",
    "lastService": "+973 3935 0330",
    "nextServiceDue": "+973 3935 0330",
    "notes": "Demo reference entry",
    "driver": {
     "id": "DEMO-0186",
     "name": "Demo Name",
     "phone": "+973 3935 0330",
     "licenseNo": "DEMO-0187",
     "licenseClass": "Heavy",
     "licenseExpiry": "+973 3935 0330",
     "status": "on-duty",
     "assignedVehicleId": "veh-007",
     "rating": 4.7,
     "tripsCompleted": 301,
     "hoursThisWeek": 44,
     "cpr": "+973 3935 0330",
     "joinDate": "+973 3935 0330",
     "emergencyContact": "+973 3935 0330"
    },
    "insuranceDays": 88,
    "registrationDays": 160,
    "serviceDays": 10,
    "home": {
     "lat": 26.142,
     "lng": 50.65,
     "location": "Demo Location"
    },
    "idleMins": 42
   },
   "licenseDays": 7,
   "baseSalary": 650
  },
  {
   "id": "DEMO-0188",
   "name": "Demo Name",
   "phone": "+973 3935 0330",
   "licenseNo": "DEMO-0189",
   "licenseClass": "Passenger Bus",
   "licenseExpiry": "+973 3935 0330",
   "status": "standby",
   "assignedVehicleId": "veh-005",
   "rating": 4.6,
   "tripsCompleted": 267,
   "hoursThisWeek": 18,
   "cpr": "+973 3935 0330",
   "joinDate": "+973 3935 0330",
   "emergencyContact": "+973 3935 0330",
   "vehicle": {
    "id": "DEMO-0190",
    "plate": "DEMO-0191",
    "name": "Demo Name",
    "type": "Bus",
    "make": "Yutong",
    "model": "ZK6122H",
    "year": 2019,
    "capacity": "45 seats",
    "status": "idle",
    "fuelLevel": 64,
    "odometer": 178220,
    "gps": {
     "lat": 26.2128,
     "lng": 50.6872,
     "location": "Demo Location"
    },
    "assignedDriverId": "drv-005",
    "insuranceExpiry": "+973 3935 0330",
    "registrationExpiry": "+973 3935 0330",
    "lastService": "+973 3935 0330",
    "nextServiceDue": "+973 3935 0330",
    "notes": "Demo reference entry",
    "driver": {
     "id": "DEMO-0192",
     "name": "Demo Name",
     "phone": "+973 3935 0330",
     "licenseNo": "DEMO-0193",
     "licenseClass": "Passenger Bus",
     "licenseExpiry": "+973 3935 0330",
     "status": "standby",
     "assignedVehicleId": "veh-005",
     "rating": 4.6,
     "tripsCompleted": 267,
     "hoursThisWeek": 18,
     "cpr": "+973 3935 0330",
     "joinDate": "+973 3935 0330",
     "emergencyContact": "+973 3935 0330"
    },
    "insuranceDays": 70,
    "registrationDays": 140,
    "serviceDays": 15,
    "home": {
     "lat": 26.2128,
     "lng": 50.6872,
     "location": "Demo Location"
    }
   },
   "licenseDays": 73,
   "baseSalary": 720
  },
  {
   "id": "DEMO-0194",
   "name": "Demo Name",
   "phone": "+973 3935 0330",
   "licenseNo": "DEMO-0195",
   "licenseClass": "Light Commercial",
   "licenseExpiry": "+973 3935 0330",
   "status": "on-duty",
   "assignedVehicleId": "veh-006",
   "rating": 4.9,
   "tripsCompleted": 88,
   "hoursThisWeek": 29,
   "cpr": "+973 3935 0330",
   "joinDate": "+973 3935 0330",
   "emergencyContact": "+973 3935 0330",
   "vehicle": {
    "id": "DEMO-0196",
    "plate": "DEMO-0197",
    "name": "Demo Name",
    "type": "Pickup",
    "make": "Toyota",
    "model": "Hilux",
    "year": 2024,
    "capacity": "1 ton",
    "status": "active",
    "fuelLevel": 55,
    "odometer": 12450,
    "gps": {
     "lat": 26.2442,
     "lng": 50.611,
     "location": "Demo Location"
    },
    "assignedDriverId": "drv-006",
    "insuranceExpiry": "+973 3935 0330",
    "registrationExpiry": "+973 3935 0330",
    "lastService": "+973 3935 0330",
    "nextServiceDue": "+973 3935 0330",
    "notes": "Demo reference entry",
    "driver": {
     "id": "DEMO-0198",
     "name": "Demo Name",
     "phone": "+973 3935 0330",
     "licenseNo": "DEMO-0199",
     "licenseClass": "Light Commercial",
     "licenseExpiry": "+973 3935 0330",
     "status": "on-duty",
     "assignedVehicleId": "veh-006",
     "rating": 4.9,
     "tripsCompleted": 88,
     "hoursThisWeek": 29,
     "cpr": "+973 3935 0330",
     "joinDate": "+973 3935 0330",
     "emergencyContact": "+973 3935 0330"
    },
    "insuranceDays": 250,
    "registrationDays": 310,
    "serviceDays": 52,
    "home": {
     "lat": 26.2442,
     "lng": 50.611,
     "location": "Demo Location"
    }
   },
   "licenseDays": 308
  },
  {
   "id": "DEMO-0200",
   "name": "Demo Name",
   "phone": "+973 3935 0330",
   "licenseNo": "DEMO-0201",
   "licenseClass": "Heavy",
   "licenseExpiry": "+973 3935 0330",
   "status": "off-duty",
   "assignedVehicleId": null,
   "rating": 4.5,
   "tripsCompleted": 224,
   "hoursThisWeek": 0,
   "cpr": "+973 3935 0330",
   "joinDate": "+973 3935 0330",
   "emergencyContact": "+973 3935 0330",
   "vehicle": null,
   "licenseDays": 158,
   "baseSalary": 640
  },
  {
   "id": "DEMO-0202",
   "name": "Demo Name",
   "phone": "+973 3935 0330",
   "licenseNo": "DEMO-0203",
   "licenseClass": "Passenger Bus",
   "licenseExpiry": "+973 3935 0330",
   "status": "leave",
   "assignedVehicleId": null,
   "rating": 4.8,
   "tripsCompleted": 390,
   "hoursThisWeek": 0,
   "cpr": "+973 3935 0330",
   "joinDate": "+973 3935 0330",
   "emergencyContact": "+973 3935 0330",
   "vehicle": null,
   "licenseDays": 38
  }
 ],
 "/api/trips": [
  {
   "id": "DEMO-0204",
   "code": "DEMO-0205",
   "type": "Movers & Packers",
   "customer": "Demo Customer",
   "origin": "Demo Origin",
   "destination": "Demo Destination",
   "vehicleId": null,
   "driverId": null,
   "status": "in-progress",
   "stage": "pickup",
   "stages": [
    {
     "stage": "pickup",
     "at": "+973 3935 0330",
     "by": "office"
    }
   ],
   "scheduledAt": "+973 3935 0330",
   "startedAt": null,
   "eta": null,
   "distanceKm": 0,
   "distanceTravelled": 0,
   "kmToGo": null,
   "etaMin": null,
   "fare": 168.96,
   "cargo": "12 items from move MV-2403",
   "customerPhone": "9735000",
   "moveId": "mv-30a7a4c6",
   "vehicle": null,
   "driver": null
  },
  {
   "id": "DEMO-0206",
   "code": "DEMO-0207",
   "type": "Residential",
   "customer": "Demo Customer",
   "origin": "Demo Origin",
   "destination": "Demo Destination",
   "vehicleId": "veh-002",
   "driverId": "drv-002",
   "status": "completed",
   "stage": "completed",
   "stages": [
    {
     "stage": "pickup",
     "at": "+973 3935 0330",
     "by": "office"
    },
    {
     "stage": "loading",
     "at": "+973 3935 0330",
     "by": "office"
    },
    {
     "stage": "transit",
     "at": "+973 3935 0330",
     "by": "office"
    },
    {
     "stage": "delivery",
     "at": "+973 3935 0330",
     "by": "gps"
    },
    {
     "stage": "completed",
     "at": "+973 3935 0330",
     "by": "office"
    }
   ],
   "scheduledAt": "+973 3935 0330",
   "startedAt": "+973 3935 0330",
   "eta": null,
   "distanceKm": 0,
   "distanceTravelled": 15.206018989723434,
   "kmToGo": 0,
   "etaMin": 1,
   "fare": 40,
   "cargo": "",
   "customerPhone": "",
   "dest": {
    "link": "demo@redsuntransport.bh",
    "lat": 26.2286,
    "lng": 50.6017
   },
   "completedAt": "+973 3935 0330",
   "live": null,
   "vehicle": {
    "id": "DEMO-0208",
    "plate": "DEMO-0209",
    "name": "Demo Name",
    "type": "Flatbed",
    "make": "Hino",
    "model": "500 Series",
    "year": 2021,
    "capacity": "12 tons",
    "status": "on-trip",
    "fuelLevel": 41,
    "odometer": 126440,
    "gps": {
     "lat": 26.2286,
     "lng": 50.6017,
     "location": "Demo Location"
    },
    "assignedDriverId": "drv-002",
    "insuranceExpiry": "+973 3935 0330",
    "registrationExpiry": "+973 3935 0330",
    "lastService": "+973 3935 0330",
    "nextServiceDue": "+973 3935 0330",
    "notes": "Demo reference entry",
    "driver": {
     "id": "DEMO-0210",
     "name": "Demo Name",
     "phone": "+973 3935 0330",
     "licenseNo": "DEMO-0211",
     "licenseClass": "Heavy Articulated",
     "licenseExpiry": "+973 3935 0330",
     "status": "on-duty",
     "assignedVehicleId": "veh-002",
     "rating": 4.8,
     "tripsCompleted": 538,
     "hoursThisWeek": 41,
     "cpr": "+973 3935 0330",
     "joinDate": "+973 3935 0330",
     "emergencyContact": "+973 3935 0330"
    },
    "insuranceDays": 44,
    "registrationDays": 120,
    "serviceDays": 4,
    "home": null,
    "tripKm": 15.206018989723434,
    "idleMins": 0
   },
   "driver": {
    "id": "DEMO-0212",
    "name": "Demo Name",
    "phone": "+973 3935 0330",
    "licenseNo": "DEMO-0213",
    "licenseClass": "Heavy Articulated",
    "licenseExpiry": "+973 3935 0330",
    "status": "on-duty",
    "assignedVehicleId": "veh-002",
    "rating": 4.8,
    "tripsCompleted": 538,
    "hoursThisWeek": 41,
    "cpr": "+973 3935 0330",
    "joinDate": "+973 3935 0330",
    "emergencyContact": "+973 3935 0330",
    "vehicle": {
     "id": "DEMO-0214",
     "plate": "DEMO-0215",
     "name": "Demo Name",
     "type": "Flatbed",
     "make": "Hino",
     "model": "500 Series",
     "year": 2021,
     "capacity": "12 tons",
     "status": "on-trip",
     "fuelLevel": 41,
     "odometer": 126440,
     "gps": {
      "lat": 26.2285,
      "lng": 50.586,
      "location": "Demo Location"
     },
     "assignedDriverId": "drv-002",
     "insuranceExpiry": "+973 3935 0330",
     "registrationExpiry": "+973 3935 0330",
     "lastService": "+973 3935 0330",
     "nextServiceDue": "+973 3935 0330",
     "notes": "Demo reference entry"
    },
    "licenseDays": 22,
    "baseSalary": 700
   }
  },
  {
   "id": "DEMO-0216",
   "code": "DEMO-0217",
   "type": "Commercial",
   "customer": "Demo Customer",
   "origin": "Demo Origin",
   "destination": "Demo Destination",
   "vehicleId": "veh-002",
   "driverId": "drv-002",
   "status": "cancelled",
   "stage": "cancelled",
   "stages": [
    {
     "stage": "pickup",
     "at": "+973 3935 0330",
     "by": "office"
    }
   ],
   "scheduledAt": "+973 3935 0330",
   "startedAt": null,
   "eta": null,
   "distanceKm": 0,
   "distanceTravelled": 0,
   "kmToGo": 1.1,
   "etaMin": 4,
   "fare": 50,
   "cargo": "",
   "customerPhone": "",
   "dest": {
    "link": "https://www.google.com/maps?q=26.1035,50.5600",
    "lat": 26.1035,
    "lng": 50.56
   },
   "live": null,
   "vehicle": {
    "id": "DEMO-0218",
    "plate": "DEMO-0219",
    "name": "Demo Name",
    "type": "Flatbed",
    "make": "Hino",
    "model": "500 Series",
    "year": 2021,
    "capacity": "12 tons",
    "status": "on-trip",
    "fuelLevel": 41,
    "odometer": 126440,
    "gps": {
     "lat": 26.2286,
     "lng": 50.6017,
     "location": "Demo Location"
    },
    "assignedDriverId": "drv-002",
    "insuranceExpiry": "+973 3935 0330",
    "registrationExpiry": "+973 3935 0330",
    "lastService": "+973 3935 0330",
    "nextServiceDue": "+973 3935 0330",
    "notes": "Demo reference entry",
    "driver": {
     "id": "DEMO-0220",
     "name": "Demo Name",
     "phone": "+973 3935 0330",
     "licenseNo": "DEMO-0221",
     "licenseClass": "Heavy Articulated",
     "licenseExpiry": "+973 3935 0330",
     "status": "on-duty",
     "assignedVehicleId": "veh-002",
     "rating": 4.8,
     "tripsCompleted": 538,
     "hoursThisWeek": 41,
     "cpr": "+973 3935 0330",
     "joinDate": "+973 3935 0330",
     "emergencyContact": "+973 3935 0330"
    },
    "insuranceDays": 44,
    "registrationDays": 120,
    "serviceDays": 4,
    "home": null,
    "tripKm": 15.206018989723434,
    "idleMins": 0
   },
   "driver": {
    "id": "DEMO-0222",
    "name": "Demo Name",
    "phone": "+973 3935 0330",
    "licenseNo": "DEMO-0223",
    "licenseClass": "Heavy Articulated",
    "licenseExpiry": "+973 3935 0330",
    "status": "on-duty",
    "assignedVehicleId": "veh-002",
    "rating": 4.8,
    "tripsCompleted": 538,
    "hoursThisWeek": 41,
    "cpr": "+973 3935 0330",
    "joinDate": "+973 3935 0330",
    "emergencyContact": "+973 3935 0330",
    "vehicle": {
     "id": "DEMO-0224",
     "plate": "DEMO-0225",
     "name": "Demo Name",
     "type": "Flatbed",
     "make": "Hino",
     "model": "500 Series",
     "year": 2021,
     "capacity": "12 tons",
     "status": "on-trip",
     "fuelLevel": 41,
     "odometer": 126440,
     "gps": {
      "lat": 26.2285,
      "lng": 50.586,
      "location": "Demo Location"
     },
     "assignedDriverId": "drv-002",
     "insuranceExpiry": "+973 3935 0330",
     "registrationExpiry": "+973 3935 0330",
     "lastService": "+973 3935 0330",
     "nextServiceDue": "+973 3935 0330",
     "notes": "Demo reference entry"
    },
    "licenseDays": 22,
    "baseSalary": 700
   }
  },
  {
   "id": "DEMO-0226",
   "code": "DEMO-0227",
   "type": "Residential",
   "customer": "Demo Customer",
   "origin": "Demo Origin",
   "destination": "Demo Destination",
   "vehicleId": "veh-002",
   "driverId": "drv-002",
   "status": "cancelled",
   "stage": "cancelled",
   "stages": [
    {
     "stage": "pickup",
     "at": "+973 3935 0330",
     "by": "office"
    },
    {
     "stage": "loading",
     "at": "+973 3935 0330",
     "by": "office"
    },
    {
     "stage": "transit",
     "at": "+973 3935 0330",
     "by": "office"
    },
    {
     "stage": "delivery",
     "at": "+973 3935 0330",
     "by": "office"
    },
    {
     "stage": "completed",
     "at": "+973 3935 0330",
     "by": "office"
    }
   ],
   "scheduledAt": "+973 3935 0330",
   "startedAt": "+973 3935 0330",
   "eta": null,
   "distanceKm": 0,
   "distanceTravelled": 0,
   "kmToGo": null,
   "etaMin": null,
   "fare": 40,
   "cargo": "",
   "customerPhone": "",
   "completedAt": "+973 3935 0330",
   "live": null,
   "vehicle": {
    "id": "DEMO-0228",
    "plate": "DEMO-0229",
    "name": "Demo Name",
    "type": "Flatbed",
    "make": "Hino",
    "model": "500 Series",
    "year": 2021,
    "capacity": "12 tons",
    "status": "on-trip",
    "fuelLevel": 41,
    "odometer": 126440,
    "gps": {
     "lat": 26.2286,
     "lng": 50.6017,
     "location": "Demo Location"
    },
    "assignedDriverId": "drv-002",
    "insuranceExpiry": "+973 3935 0330",
    "registrationExpiry": "+973 3935 0330",
    "lastService": "+973 3935 0330",
    "nextServiceDue": "+973 3935 0330",
    "notes": "Demo reference entry",
    "driver": {
     "id": "DEMO-0230",
     "name": "Demo Name",
     "phone": "+973 3935 0330",
     "licenseNo": "DEMO-0231",
     "licenseClass": "Heavy Articulated",
     "licenseExpiry": "+973 3935 0330",
     "status": "on-duty",
     "assignedVehicleId": "veh-002",
     "rating": 4.8,
     "tripsCompleted": 538,
     "hoursThisWeek": 41,
     "cpr": "+973 3935 0330",
     "joinDate": "+973 3935 0330",
     "emergencyContact": "+973 3935 0330"
    },
    "insuranceDays": 44,
    "registrationDays": 120,
    "serviceDays": 4,
    "home": null,
    "tripKm": 15.206018989723434,
    "idleMins": 0
   },
   "driver": {
    "id": "DEMO-0232",
    "name": "Demo Name",
    "phone": "+973 3935 0330",
    "licenseNo": "DEMO-0233",
    "licenseClass": "Heavy Articulated",
    "licenseExpiry": "+973 3935 0330",
    "status": "on-duty",
    "assignedVehicleId": "veh-002",
    "rating": 4.8,
    "tripsCompleted": 538,
    "hoursThisWeek": 41,
    "cpr": "+973 3935 0330",
    "joinDate": "+973 3935 0330",
    "emergencyContact": "+973 3935 0330",
    "vehicle": {
     "id": "DEMO-0234",
     "plate": "DEMO-0235",
     "name": "Demo Name",
     "type": "Flatbed",
     "make": "Hino",
     "model": "500 Series",
     "year": 2021,
     "capacity": "12 tons",
     "status": "on-trip",
     "fuelLevel": 41,
     "odometer": 126440,
     "gps": {
      "lat": 26.2285,
      "lng": 50.586,
      "location": "Demo Location"
     },
     "assignedDriverId": "drv-002",
     "insuranceExpiry": "+973 3935 0330",
     "registrationExpiry": "+973 3935 0330",
     "lastService": "+973 3935 0330",
     "nextServiceDue": "+973 3935 0330",
     "notes": "Demo reference entry"
    },
    "licenseDays": 22,
    "baseSalary": 700
   }
  },
  {
   "id": "DEMO-0236",
   "code": "DEMO-0237",
   "type": "Residential",
   "customer": "Demo Customer",
   "origin": "Demo Origin",
   "destination": "Demo Destination",
   "vehicleId": "veh-001",
   "driverId": "drv-001",
   "status": "cancelled",
   "stage": "cancelled",
   "stages": [
    {
     "stage": "delivery",
     "at": "+973 3935 0330",
     "by": "gps"
    }
   ],
   "scheduledAt": "+973 3935 0330",
   "startedAt": null,
   "eta": null,
   "distanceKm": 0,
   "distanceTravelled": 0,
   "kmToGo": 0,
   "etaMin": 1,
   "fare": 45,
   "cargo": "",
   "customerPhone": "",
   "dest": {
    "link": "demo@redsuntransport.bh",
    "lat": 26.1034,
    "lng": 50.5551
   },
   "live": null,
   "vehicle": {
    "id": "DEMO-0238",
    "plate": "DEMO-0239",
    "name": "Demo Name",
    "type": "Box Truck",
    "make": "Isuzu",
    "model": "NPR 75",
    "year": 2022,
    "capacity": "5.5 tons",
    "status": "active",
    "fuelLevel": 78,
    "odometer": 84210,
    "gps": {
     "lat": 26.2,
     "lng": 50.5,
     "location": "Demo Location"
    },
    "assignedDriverId": "drv-001",
    "insuranceExpiry": "+973 3935 0330",
    "registrationExpiry": "+973 3935 0330",
    "lastService": "+973 3935 0330",
    "nextServiceDue": "+973 3935 0330",
    "notes": "Demo reference entry",
    "driver": {
     "id": "DEMO-0240",
     "name": "Demo Name",
     "phone": "+973 3935 0330",
     "licenseNo": "DEMO-0241",
     "licenseClass": "Heavy",
     "licenseExpiry": "+973 3935 0330",
     "status": "on-duty",
     "assignedVehicleId": "veh-001",
     "rating": 4.9,
     "tripsCompleted": 412,
     "hoursThisWeek": 38,
     "cpr": "+973 3935 0330",
     "joinDate": "+973 3935 0330",
     "emergencyContact": "+973 3935 0330"
    },
    "insuranceDays": 96,
    "registrationDays": 210,
    "serviceDays": 18,
    "home": {
     "lat": 26.2075,
     "lng": 50.5906,
     "location": "Demo Location"
    },
    "idleMins": 0,
    "tripKm": 12.053043054654875,
    "photo": null
   },
   "driver": {
    "id": "DEMO-0242",
    "name": "Demo Name",
    "phone": "+973 3935 0330",
    "licenseNo": "DEMO-0243",
    "licenseClass": "Heavy",
    "licenseExpiry": "+973 3935 0330",
    "status": "on-duty",
    "assignedVehicleId": "veh-001",
    "rating": 4.9,
    "tripsCompleted": 412,
    "hoursThisWeek": 38,
    "cpr": "+973 3935 0330",
    "joinDate": "+973 3935 0330",
    "emergencyContact": "+973 3935 0330",
    "vehicle": {
     "id": "DEMO-0244",
     "plate": "DEMO-0245",
     "name": "Demo Name",
     "type": "Box Truck",
     "make": "Isuzu",
     "model": "NPR 75",
     "year": 2022,
     "capacity": "5.5 tons",
     "status": "active",
     "fuelLevel": 78,
     "odometer": 84210,
     "gps": {
      "lat": 26.2075,
      "lng": 50.5906,
      "location": "Demo Location"
     },
     "assignedDriverId": "drv-001",
     "insuranceExpiry": "+973 3935 0330",
     "registrationExpiry": "+973 3935 0330",
     "lastService": "+973 3935 0330",
     "nextServiceDue": "+973 3935 0330",
     "notes": "Demo reference entry"
    },
    "licenseDays": 140,
    "photo": null,
    "documents": []
   }
  },
  {
   "id": "DEMO-0246",
   "code": "DEMO-0247",
   "type": "Residential",
   "customer": "Demo Customer",
   "origin": "Demo Origin",
   "destination": "Demo Destination",
   "vehicleId": "veh-001",
   "driverId": "drv-001",
   "status": "in-progress",
   "scheduledAt": "+973 3935 0330",
   "startedAt": "+973 3935 0330",
   "eta": "+973 3935 0330",
   "distanceKm": 28,
   "fare": 185,
   "cargo": "4BR villa furniture + carpentry",
   "vehicle": {
    "id": "DEMO-0248",
    "plate": "DEMO-0249",
    "name": "Demo Name",
    "type": "Box Truck",
    "make": "Isuzu",
    "model": "NPR 75",
    "year": 2022,
    "capacity": "5.5 tons",
    "status": "active",
    "fuelLevel": 78,
    "odometer": 84210,
    "gps": {
     "lat": 26.2,
     "lng": 50.5,
     "location": "Demo Location"
    },
    "assignedDriverId": "drv-001",
    "insuranceExpiry": "+973 3935 0330",
    "registrationExpiry": "+973 3935 0330",
    "lastService": "+973 3935 0330",
    "nextServiceDue": "+973 3935 0330",
    "notes": "Demo reference entry",
    "driver": {
     "id": "DEMO-0250",
     "name": "Demo Name",
     "phone": "+973 3935 0330",
     "licenseNo": "DEMO-0251",
     "licenseClass": "Heavy",
     "licenseExpiry": "+973 3935 0330",
     "status": "on-duty",
     "assignedVehicleId": "veh-001",
     "rating": 4.9,
     "tripsCompleted": 412,
     "hoursThisWeek": 38,
     "cpr": "+973 3935 0330",
     "joinDate": "+973 3935 0330",
     "emergencyContact": "+973 3935 0330"
    },
    "insuranceDays": 96,
    "registrationDays": 210,
    "serviceDays": 18,
    "home": {
     "lat": 26.2075,
     "lng": 50.5906,
     "location": "Demo Location"
    },
    "idleMins": 0,
    "tripKm": 12.053043054654875,
    "photo": null
   },
   "driver": {
    "id": "DEMO-0252",
    "name": "Demo Name",
    "phone": "+973 3935 0330",
    "licenseNo": "DEMO-0253",
    "licenseClass": "Heavy",
    "licenseExpiry": "+973 3935 0330",
    "status": "on-duty",
    "assignedVehicleId": "veh-001",
    "rating": 4.9,
    "tripsCompleted": 412,
    "hoursThisWeek": 38,
    "cpr": "+973 3935 0330",
    "joinDate": "+973 3935 0330",
    "emergencyContact": "+973 3935 0330",
    "vehicle": {
     "id": "DEMO-0254",
     "plate": "DEMO-0255",
     "name": "Demo Name",
     "type": "Box Truck",
     "make": "Isuzu",
     "model": "NPR 75",
     "year": 2022,
     "capacity": "5.5 tons",
     "status": "active",
     "fuelLevel": 78,
     "odometer": 84210,
     "gps": {
      "lat": 26.2075,
      "lng": 50.5906,
      "location": "Demo Location"
     },
     "assignedDriverId": "drv-001",
     "insuranceExpiry": "+973 3935 0330",
     "registrationExpiry": "+973 3935 0330",
     "lastService": "+973 3935 0330",
     "nextServiceDue": "+973 3935 0330",
     "notes": "Demo reference entry"
    },
    "licenseDays": 140,
    "photo": null,
    "documents": []
   },
   "live": null,
   "dest": null,
   "distanceTravelled": 12.053043054654875
  },
  {
   "id": "DEMO-0256",
   "code": "DEMO-0257",
   "type": "Commercial",
   "customer": "Demo Customer",
   "origin": "Demo Origin",
   "destination": "Demo Destination",
   "vehicleId": "veh-002",
   "driverId": "drv-002",
   "status": "completed",
   "scheduledAt": "+973 3935 0330",
   "startedAt": "+973 3935 0330",
   "eta": "+973 3935 0330",
   "distanceKm": 9,
   "fare": 320,
   "cargo": "Workstations and server racks",
   "vehicle": {
    "id": "DEMO-0258",
    "plate": "DEMO-0259",
    "name": "Demo Name",
    "type": "Flatbed",
    "make": "Hino",
    "model": "500 Series",
    "year": 2021,
    "capacity": "12 tons",
    "status": "on-trip",
    "fuelLevel": 41,
    "odometer": 126440,
    "gps": {
     "lat": 26.2286,
     "lng": 50.6017,
     "location": "Demo Location"
    },
    "assignedDriverId": "drv-002",
    "insuranceExpiry": "+973 3935 0330",
    "registrationExpiry": "+973 3935 0330",
    "lastService": "+973 3935 0330",
    "nextServiceDue": "+973 3935 0330",
    "notes": "Demo reference entry",
    "driver": {
     "id": "DEMO-0260",
     "name": "Demo Name",
     "phone": "+973 3935 0330",
     "licenseNo": "DEMO-0261",
     "licenseClass": "Heavy Articulated",
     "licenseExpiry": "+973 3935 0330",
     "status": "on-duty",
     "assignedVehicleId": "veh-002",
     "rating": 4.8,
     "tripsCompleted": 538,
     "hoursThisWeek": 41,
     "cpr": "+973 3935 0330",
     "joinDate": "+973 3935 0330",
     "emergencyContact": "+973 3935 0330"
    },
    "insuranceDays": 44,
    "registrationDays": 120,
    "serviceDays": 4,
    "home": null,
    "tripKm": 15.206018989723434,
    "idleMins": 0
   },
   "driver": {
    "id": "DEMO-0262",
    "name": "Demo Name",
    "phone": "+973 3935 0330",
    "licenseNo": "DEMO-0263",
    "licenseClass": "Heavy Articulated",
    "licenseExpiry": "+973 3935 0330",
    "status": "on-duty",
    "assignedVehicleId": "veh-002",
    "rating": 4.8,
    "tripsCompleted": 538,
    "hoursThisWeek": 41,
    "cpr": "+973 3935 0330",
    "joinDate": "+973 3935 0330",
    "emergencyContact": "+973 3935 0330",
    "vehicle": {
     "id": "DEMO-0264",
     "plate": "DEMO-0265",
     "name": "Demo Name",
     "type": "Flatbed",
     "make": "Hino",
     "model": "500 Series",
     "year": 2021,
     "capacity": "12 tons",
     "status": "on-trip",
     "fuelLevel": 41,
     "odometer": 126440,
     "gps": {
      "lat": 26.2285,
      "lng": 50.586,
      "location": "Demo Location"
     },
     "assignedDriverId": "drv-002",
     "insuranceExpiry": "+973 3935 0330",
     "registrationExpiry": "+973 3935 0330",
     "lastService": "+973 3935 0330",
     "nextServiceDue": "+973 3935 0330",
     "notes": "Demo reference entry"
    },
    "licenseDays": 22,
    "baseSalary": 700
   },
   "live": null,
   "completedAt": "+973 3935 0330",
   "stage": "completed",
   "stages": [
    {
     "stage": "pickup",
     "at": "+973 3935 0330",
     "by": "office"
    },
    {
     "stage": "loading",
     "at": "+973 3935 0330",
     "by": "office"
    },
    {
     "stage": "transit",
     "at": "+973 3935 0330",
     "by": "office"
    },
    {
     "stage": "delivery",
     "at": "+973 3935 0330",
     "by": "office"
    },
    {
     "stage": "completed",
     "at": "+973 3935 0330",
     "by": "office"
    }
   ]
  },
  {
   "id": "DEMO-0266",
   "code": "DEMO-0267",
   "type": "International",
   "customer": "Demo Customer",
   "origin": "Demo Origin",
   "destination": "Demo Destination",
   "vehicleId": "veh-007",
   "driverId": "drv-004",
   "status": "in-progress",
   "scheduledAt": "+973 3935 0330",
   "startedAt": "+973 3935 0330",
   "eta": "+973 3935 0330",
   "distanceKm": 42,
   "fare": 640,
   "cargo": "Chilled F&B consignment",
   "vehicle": {
    "id": "DEMO-0268",
    "plate": "DEMO-0269",
    "name": "Demo Name",
    "type": "Reefer",
    "make": "Mitsubishi",
    "model": "Fuso Canter",
    "year": 2022,
    "capacity": "3.5 tons",
    "status": "on-trip",
    "fuelLevel": 37,
    "odometer": 67210,
    "gps": {
     "lat": 26.142,
     "lng": 50.65,
     "location": "Demo Location"
    },
    "assignedDriverId": "drv-004",
    "insuranceExpiry": "+973 3935 0330",
    "registrationExpiry": "+973 3935 0330",
    "lastService": "+973 3935 0330",
    "nextServiceDue": "+973 3935 0330",
    "notes": "Demo reference entry",
    "driver": {
     "id": "DEMO-0270",
     "name": "Demo Name",
     "phone": "+973 3935 0330",
     "licenseNo": "DEMO-0271",
     "licenseClass": "Heavy",
     "licenseExpiry": "+973 3935 0330",
     "status": "on-duty",
     "assignedVehicleId": "veh-007",
     "rating": 4.7,
     "tripsCompleted": 301,
     "hoursThisWeek": 44,
     "cpr": "+973 3935 0330",
     "joinDate": "+973 3935 0330",
     "emergencyContact": "+973 3935 0330"
    },
    "insuranceDays": 88,
    "registrationDays": 160,
    "serviceDays": 10,
    "home": {
     "lat": 26.142,
     "lng": 50.65,
     "location": "Demo Location"
    },
    "idleMins": 42
   },
   "driver": {
    "id": "DEMO-0272",
    "name": "Demo Name",
    "phone": "+973 3935 0330",
    "licenseNo": "DEMO-0273",
    "licenseClass": "Heavy",
    "licenseExpiry": "+973 3935 0330",
    "status": "on-duty",
    "assignedVehicleId": "veh-007",
    "rating": 4.7,
    "tripsCompleted": 301,
    "hoursThisWeek": 44,
    "cpr": "+973 3935 0330",
    "joinDate": "+973 3935 0330",
    "emergencyContact": "+973 3935 0330",
    "vehicle": {
     "id": "DEMO-0274",
     "plate": "DEMO-0275",
     "name": "Demo Name",
     "type": "Reefer",
     "make": "Mitsubishi",
     "model": "Fuso Canter",
     "year": 2022,
     "capacity": "3.5 tons",
     "status": "on-trip",
     "fuelLevel": 37,
     "odometer": 67210,
     "gps": {
      "lat": 26.142,
      "lng": 50.65,
      "location": "Demo Location"
     },
     "assignedDriverId": "drv-004",
     "insuranceExpiry": "+973 3935 0330",
     "registrationExpiry": "+973 3935 0330",
     "lastService": "+973 3935 0330",
     "nextServiceDue": "+973 3935 0330",
     "notes": "Demo reference entry"
    },
    "licenseDays": 9,
    "baseSalary": 650
   },
   "stage": "delivery"
  },
  {
   "id": "DEMO-0276",
   "code": "DEMO-0277",
   "type": "Residential",
   "customer": "Demo Customer",
   "origin": "Demo Origin",
   "destination": "Demo Destination",
   "vehicleId": "veh-003",
   "driverId": "drv-003",
   "status": "completed",
   "scheduledAt": "+973 3935 0330",
   "startedAt": "+973 3935 0330",
   "completedAt": "+973 3935 0330",
   "eta": "+973 3935 0330",
   "distanceKm": 6,
   "fare": 95,
   "cargo": "2BR apartment",
   "vehicle": {
    "id": "DEMO-0278",
    "plate": "DEMO-0279",
    "name": "Demo Name",
    "type": "Cargo Van",
    "make": "Mercedes-Benz",
    "model": "Sprinter 316",
    "year": 2023,
    "capacity": "1.8 tons",
    "status": "active",
    "fuelLevel": 92,
    "odometer": 31880,
    "gps": {
     "lat": 26.2361,
     "lng": 50.536,
     "location": "Demo Location"
    },
    "assignedDriverId": "drv-003",
    "insuranceExpiry": "+973 3935 0330",
    "registrationExpiry": "+973 3935 0330",
    "lastService": "+973 3935 0330",
    "nextServiceDue": "+973 3935 0330",
    "notes": "Demo reference entry",
    "driver": {
     "id": "DEMO-0280",
     "name": "Demo Name",
     "phone": "+973 3935 0330",
     "licenseNo": "DEMO-0281",
     "licenseClass": "Light Commercial",
     "licenseExpiry": "+973 3935 0330",
     "status": "on-duty",
     "assignedVehicleId": "veh-003",
     "rating": 5,
     "tripsCompleted": 198,
     "hoursThisWeek": 32,
     "cpr": "+973 3935 0330",
     "joinDate": "+973 3935 0330",
     "emergencyContact": "+973 3935 0330"
    },
    "insuranceDays": 180,
    "registrationDays": 300,
    "serviceDays": 48,
    "home": {
     "lat": 26.2361,
     "lng": 50.536,
     "location": "Demo Location"
    }
   },
   "driver": {
    "id": "DEMO-0282",
    "name": "Demo Name",
    "phone": "+973 3935 0330",
    "licenseNo": "DEMO-0283",
    "licenseClass": "Light Commercial",
    "licenseExpiry": "+973 3935 0330",
    "status": "on-duty",
    "assignedVehicleId": "veh-003",
    "rating": 5,
    "tripsCompleted": 198,
    "hoursThisWeek": 32,
    "cpr": "+973 3935 0330",
    "joinDate": "+973 3935 0330",
    "emergencyContact": "+973 3935 0330",
    "vehicle": {
     "id": "DEMO-0284",
     "plate": "DEMO-0285",
     "name": "Demo Name",
     "type": "Cargo Van",
     "make": "Mercedes-Benz",
     "model": "Sprinter 316",
     "year": 2023,
     "capacity": "1.8 tons",
     "status": "active",
     "fuelLevel": 92,
     "odometer": 31880,
     "gps": {
      "lat": 26.2361,
      "lng": 50.536,
      "location": "Demo Location"
     },
     "assignedDriverId": "drv-003",
     "insuranceExpiry": "+973 3935 0330",
     "registrationExpiry": "+973 3935 0330",
     "lastService": "+973 3935 0330",
     "nextServiceDue": "+973 3935 0330",
     "notes": "Demo reference entry"
    },
    "licenseDays": 200
   }
  },
  {
   "id": "DEMO-0286",
   "code": "DEMO-0287",
   "type": "Special",
   "customer": "Demo Customer",
   "origin": "Demo Origin",
   "destination": "Demo Destination",
   "vehicleId": "veh-002",
   "driverId": "drv-002",
   "status": "completed",
   "scheduledAt": "+973 3935 0330",
   "startedAt": "+973 3935 0330",
   "completedAt": "+973 3935 0330",
   "eta": "+973 3935 0330",
   "distanceKm": 11,
   "fare": 280,
   "cargo": "Grand piano (crated)",
   "vehicle": {
    "id": "DEMO-0288",
    "plate": "DEMO-0289",
    "name": "Demo Name",
    "type": "Flatbed",
    "make": "Hino",
    "model": "500 Series",
    "year": 2021,
    "capacity": "12 tons",
    "status": "on-trip",
    "fuelLevel": 41,
    "odometer": 126440,
    "gps": {
     "lat": 26.2286,
     "lng": 50.6017,
     "location": "Demo Location"
    },
    "assignedDriverId": "drv-002",
    "insuranceExpiry": "+973 3935 0330",
    "registrationExpiry": "+973 3935 0330",
    "lastService": "+973 3935 0330",
    "nextServiceDue": "+973 3935 0330",
    "notes": "Demo reference entry",
    "driver": {
     "id": "DEMO-0290",
     "name": "Demo Name",
     "phone": "+973 3935 0330",
     "licenseNo": "DEMO-0291",
     "licenseClass": "Heavy Articulated",
     "licenseExpiry": "+973 3935 0330",
     "status": "on-duty",
     "assignedVehicleId": "veh-002",
     "rating": 4.8,
     "tripsCompleted": 538,
     "hoursThisWeek": 41,
     "cpr": "+973 3935 0330",
     "joinDate": "+973 3935 0330",
     "emergencyContact": "+973 3935 0330"
    },
    "insuranceDays": 44,
    "registrationDays": 120,
    "serviceDays": 4,
    "home": null,
    "tripKm": 15.206018989723434,
    "idleMins": 0
   },
   "driver": {
    "id": "DEMO-0292",
    "name": "Demo Name",
    "phone": "+973 3935 0330",
    "licenseNo": "DEMO-0293",
    "licenseClass": "Heavy Articulated",
    "licenseExpiry": "+973 3935 0330",
    "status": "on-duty",
    "assignedVehicleId": "veh-002",
    "rating": 4.8,
    "tripsCompleted": 538,
    "hoursThisWeek": 41,
    "cpr": "+973 3935 0330",
    "joinDate": "+973 3935 0330",
    "emergencyContact": "+973 3935 0330",
    "vehicle": {
     "id": "DEMO-0294",
     "plate": "DEMO-0295",
     "name": "Demo Name",
     "type": "Flatbed",
     "make": "Hino",
     "model": "500 Series",
     "year": 2021,
     "capacity": "12 tons",
     "status": "on-trip",
     "fuelLevel": 41,
     "odometer": 126440,
     "gps": {
      "lat": 26.2285,
      "lng": 50.586,
      "location": "Demo Location"
     },
     "assignedDriverId": "drv-002",
     "insuranceExpiry": "+973 3935 0330",
     "registrationExpiry": "+973 3935 0330",
     "lastService": "+973 3935 0330",
     "nextServiceDue": "+973 3935 0330",
     "notes": "Demo reference entry"
    },
    "licenseDays": 22,
    "baseSalary": 700
   }
  },
  {
   "id": "DEMO-0296",
   "code": "DEMO-0297",
   "type": "Passenger",
   "customer": "Demo Customer",
   "origin": "Demo Origin",
   "destination": "Demo Destination",
   "vehicleId": "veh-005",
   "driverId": "drv-005",
   "status": "scheduled",
   "scheduledAt": "+973 3935 0330",
   "startedAt": null,
   "eta": "+973 3935 0330",
   "distanceKm": 14,
   "fare": 150,
   "cargo": "VIP staff transfer",
   "vehicle": {
    "id": "DEMO-0298",
    "plate": "DEMO-0299",
    "name": "Demo Name",
    "type": "Bus",
    "make": "Yutong",
    "model": "ZK6122H",
    "year": 2019,
    "capacity": "45 seats",
    "status": "idle",
    "fuelLevel": 64,
    "odometer": 178220,
    "gps": {
     "lat": 26.2128,
     "lng": 50.6872,
     "location": "Demo Location"
    },
    "assignedDriverId": "drv-005",
    "insuranceExpiry": "+973 3935 0330",
    "registrationExpiry": "+973 3935 0330",
    "lastService": "+973 3935 0330",
    "nextServiceDue": "+973 3935 0330",
    "notes": "Demo reference entry",
    "driver": {
     "id": "DEMO-0300",
     "name": "Demo Name",
     "phone": "+973 3935 0330",
     "licenseNo": "DEMO-0301",
     "licenseClass": "Passenger Bus",
     "licenseExpiry": "+973 3935 0330",
     "status": "standby",
     "assignedVehicleId": "veh-005",
     "rating": 4.6,
     "tripsCompleted": 267,
     "hoursThisWeek": 18,
     "cpr": "+973 3935 0330",
     "joinDate": "+973 3935 0330",
     "emergencyContact": "+973 3935 0330"
    },
    "insuranceDays": 70,
    "registrationDays": 140,
    "serviceDays": 15,
    "home": {
     "lat": 26.2128,
     "lng": 50.6872,
     "location": "Demo Location"
    }
   },
   "driver": {
    "id": "DEMO-0302",
    "name": "Demo Name",
    "phone": "+973 3935 0330",
    "licenseNo": "DEMO-0303",
    "licenseClass": "Passenger Bus",
    "licenseExpiry": "+973 3935 0330",
    "status": "standby",
    "assignedVehicleId": "veh-005",
    "rating": 4.6,
    "tripsCompleted": 267,
    "hoursThisWeek": 18,
    "cpr": "+973 3935 0330",
    "joinDate": "+973 3935 0330",
    "emergencyContact": "+973 3935 0330",
    "vehicle": {
     "id": "DEMO-0304",
     "plate": "DEMO-0305",
     "name": "Demo Name",
     "type": "Bus",
     "make": "Yutong",
     "model": "ZK6122H",
     "year": 2019,
     "capacity": "45 seats",
     "status": "idle",
     "fuelLevel": 64,
     "odometer": 178220,
     "gps": {
      "lat": 26.2128,
      "lng": 50.6872,
      "location": "Demo Location"
     },
     "assignedDriverId": "drv-005",
     "insuranceExpiry": "+973 3935 0330",
     "registrationExpiry": "+973 3935 0330",
     "lastService": "+973 3935 0330",
     "nextServiceDue": "+973 3935 0330",
     "notes": "Demo reference entry"
    },
    "licenseDays": 75,
    "baseSalary": 720
   }
  },
  {
   "id": "DEMO-0306",
   "code": "DEMO-0307",
   "type": "Residential",
   "customer": "Demo Customer",
   "origin": "Demo Origin",
   "destination": "Demo Destination",
   "vehicleId": "veh-006",
   "driverId": "drv-006",
   "status": "completed",
   "scheduledAt": "+973 3935 0330",
   "startedAt": "+973 3935 0330",
   "completedAt": "+973 3935 0330",
   "eta": "+973 3935 0330",
   "distanceKm": 16,
   "fare": 110,
   "cargo": "Studio + packing kits",
   "vehicle": {
    "id": "DEMO-0308",
    "plate": "DEMO-0309",
    "name": "Demo Name",
    "type": "Pickup",
    "make": "Toyota",
    "model": "Hilux",
    "year": 2024,
    "capacity": "1 ton",
    "status": "active",
    "fuelLevel": 55,
    "odometer": 12450,
    "gps": {
     "lat": 26.2442,
     "lng": 50.611,
     "location": "Demo Location"
    },
    "assignedDriverId": "drv-006",
    "insuranceExpiry": "+973 3935 0330",
    "registrationExpiry": "+973 3935 0330",
    "lastService": "+973 3935 0330",
    "nextServiceDue": "+973 3935 0330",
    "notes": "Demo reference entry",
    "driver": {
     "id": "DEMO-0310",
     "name": "Demo Name",
     "phone": "+973 3935 0330",
     "licenseNo": "DEMO-0311",
     "licenseClass": "Light Commercial",
     "licenseExpiry": "+973 3935 0330",
     "status": "on-duty",
     "assignedVehicleId": "veh-006",
     "rating": 4.9,
     "tripsCompleted": 88,
     "hoursThisWeek": 29,
     "cpr": "+973 3935 0330",
     "joinDate": "+973 3935 0330",
     "emergencyContact": "+973 3935 0330"
    },
    "insuranceDays": 250,
    "registrationDays": 310,
    "serviceDays": 52,
    "home": {
     "lat": 26.2442,
     "lng": 50.611,
     "location": "Demo Location"
    }
   },
   "driver": {
    "id": "DEMO-0312",
    "name": "Demo Name",
    "phone": "+973 3935 0330",
    "licenseNo": "DEMO-0313",
    "licenseClass": "Light Commercial",
    "licenseExpiry": "+973 3935 0330",
    "status": "on-duty",
    "assignedVehicleId": "veh-006",
    "rating": 4.9,
    "tripsCompleted": 88,
    "hoursThisWeek": 29,
    "cpr": "+973 3935 0330",
    "joinDate": "+973 3935 0330",
    "emergencyContact": "+973 3935 0330",
    "vehicle": {
     "id": "DEMO-0314",
     "plate": "DEMO-0315",
     "name": "Demo Name",
     "type": "Pickup",
     "make": "Toyota",
     "model": "Hilux",
     "year": 2024,
     "capacity": "1 ton",
     "status": "active",
     "fuelLevel": 55,
     "odometer": 12450,
     "gps": {
      "lat": 26.2442,
      "lng": 50.611,
      "location": "Demo Location"
     },
     "assignedDriverId": "drv-006",
     "insuranceExpiry": "+973 3935 0330",
     "registrationExpiry": "+973 3935 0330",
     "lastService": "+973 3935 0330",
     "nextServiceDue": "+973 3935 0330",
     "notes": "Demo reference entry"
    },
    "licenseDays": 310
   }
  },
  {
   "id": "DEMO-0316",
   "code": "DEMO-0317",
   "type": "Commercial",
   "customer": "Demo Customer",
   "origin": "Demo Origin",
   "destination": "Demo Destination",
   "vehicleId": "veh-004",
   "driverId": "drv-007",
   "status": "cancelled",
   "scheduledAt": "+973 3935 0330",
   "startedAt": null,
   "eta": null,
   "distanceKm": 22,
   "fare": 0,
   "cargo": "Palletized goods — vehicle in workshop",
   "vehicle": {
    "id": "DEMO-0318",
    "plate": "DEMO-0319",
    "name": "Demo Name",
    "type": "Trailer",
    "make": "Volvo",
    "model": "FH16",
    "year": 2020,
    "capacity": "24 tons",
    "status": "maintenance",
    "fuelLevel": 22,
    "odometer": 214900,
    "gps": {
     "lat": 26.1702,
     "lng": 50.547,
     "location": "Demo Location"
    },
    "assignedDriverId": null,
    "insuranceExpiry": "+973 3935 0330",
    "registrationExpiry": "+973 3935 0330",
    "lastService": "+973 3935 0330",
    "nextServiceDue": "+973 3935 0330",
    "notes": "Demo reference entry",
    "driver": null,
    "insuranceDays": 12,
    "registrationDays": 55,
    "serviceDays": 28,
    "home": {
     "lat": 26.1702,
     "lng": 50.547,
     "location": "Demo Location"
    }
   },
   "driver": {
    "id": "DEMO-0320",
    "name": "Demo Name",
    "phone": "+973 3935 0330",
    "licenseNo": "DEMO-0321",
    "licenseClass": "Heavy",
    "licenseExpiry": "+973 3935 0330",
    "status": "off-duty",
    "assignedVehicleId": null,
    "rating": 4.5,
    "tripsCompleted": 224,
    "hoursThisWeek": 0,
    "cpr": "+973 3935 0330",
    "joinDate": "+973 3935 0330",
    "emergencyContact": "+973 3935 0330",
    "vehicle": null,
    "licenseDays": 160,
    "baseSalary": 640
   }
  },
  {
   "id": "DEMO-0322",
   "code": "DEMO-0323",
   "driverId": "drv-004",
   "vehicleId": "veh-007",
   "status": "completed",
   "stage": "completed",
   "startedAt": "+973 3935 0330",
   "completedAt": "+973 3935 0330",
   "destination": "Demo Destination",
   "fare": 45,
   "vehicle": {
    "id": "DEMO-0324",
    "plate": "DEMO-0325",
    "name": "Demo Name",
    "type": "Reefer",
    "make": "Mitsubishi",
    "model": "Fuso Canter",
    "year": 2022,
    "capacity": "3.5 tons",
    "status": "on-trip",
    "fuelLevel": 37,
    "odometer": 67210,
    "gps": {
     "lat": 26.142,
     "lng": 50.65,
     "location": "Demo Location"
    },
    "assignedDriverId": "drv-004",
    "insuranceExpiry": "+973 3935 0330",
    "registrationExpiry": "+973 3935 0330",
    "lastService": "+973 3935 0330",
    "nextServiceDue": "+973 3935 0330",
    "notes": "Demo reference entry",
    "driver": {
     "id": "DEMO-0326",
     "name": "Demo Name",
     "phone": "+973 3935 0330",
     "licenseNo": "DEMO-0327",
     "licenseClass": "Heavy",
     "licenseExpiry": "+973 3935 0330",
     "status": "on-duty",
     "assignedVehicleId": "veh-007",
     "rating": 4.7,
     "tripsCompleted": 301,
     "hoursThisWeek": 44,
     "cpr": "+973 3935 0330",
     "joinDate": "+973 3935 0330",
     "emergencyContact": "+973 3935 0330"
    },
    "insuranceDays": 88,
    "registrationDays": 160,
    "serviceDays": 10,
    "home": {
     "lat": 26.142,
     "lng": 50.65,
     "location": "Demo Location"
    },
    "idleMins": 42
   },
   "driver": {
    "id": "DEMO-0328",
    "name": "Demo Name",
    "phone": "+973 3935 0330",
    "licenseNo": "DEMO-0329",
    "licenseClass": "Heavy",
    "licenseExpiry": "+973 3935 0330",
    "status": "on-duty",
    "assignedVehicleId": "veh-007",
    "rating": 4.7,
    "tripsCompleted": 301,
    "hoursThisWeek": 44,
    "cpr": "+973 3935 0330",
    "joinDate": "+973 3935 0330",
    "emergencyContact": "+973 3935 0330",
    "vehicle": {
     "id": "DEMO-0330",
     "plate": "DEMO-0331",
     "name": "Demo Name",
     "type": "Reefer",
     "make": "Mitsubishi",
     "model": "Fuso Canter",
     "year": 2022,
     "capacity": "3.5 tons",
     "status": "on-trip",
     "fuelLevel": 37,
     "odometer": 67210,
     "gps": {
      "lat": 26.142,
      "lng": 50.65,
      "location": "Demo Location"
     },
     "assignedDriverId": "drv-004",
     "insuranceExpiry": "+973 3935 0330",
     "registrationExpiry": "+973 3935 0330",
     "lastService": "+973 3935 0330",
     "nextServiceDue": "+973 3935 0330",
     "notes": "Demo reference entry"
    },
    "licenseDays": 9,
    "baseSalary": 650
   }
  },
  {
   "id": "DEMO-0332",
   "code": "DEMO-0333",
   "driverId": "drv-004",
   "vehicleId": "veh-007",
   "status": "completed",
   "stage": "completed",
   "startedAt": "+973 3935 0330",
   "completedAt": "+973 3935 0330",
   "destination": "Demo Destination",
   "fare": 55,
   "vehicle": {
    "id": "DEMO-0334",
    "plate": "DEMO-0335",
    "name": "Demo Name",
    "type": "Reefer",
    "make": "Mitsubishi",
    "model": "Fuso Canter",
    "year": 2022,
    "capacity": "3.5 tons",
    "status": "on-trip",
    "fuelLevel": 37,
    "odometer": 67210,
    "gps": {
     "lat": 26.142,
     "lng": 50.65,
     "location": "Demo Location"
    },
    "assignedDriverId": "drv-004",
    "insuranceExpiry": "+973 3935 0330",
    "registrationExpiry": "+973 3935 0330",
    "lastService": "+973 3935 0330",
    "nextServiceDue": "+973 3935 0330",
    "notes": "Demo reference entry",
    "driver": {
     "id": "DEMO-0336",
     "name": "Demo Name",
     "phone": "+973 3935 0330",
     "licenseNo": "DEMO-0337",
     "licenseClass": "Heavy",
     "licenseExpiry": "+973 3935 0330",
     "status": "on-duty",
     "assignedVehicleId": "veh-007",
     "rating": 4.7,
     "tripsCompleted": 301,
     "hoursThisWeek": 44,
     "cpr": "+973 3935 0330",
     "joinDate": "+973 3935 0330",
     "emergencyContact": "+973 3935 0330"
    },
    "insuranceDays": 88,
    "registrationDays": 160,
    "serviceDays": 10,
    "home": {
     "lat": 26.142,
     "lng": 50.65,
     "location": "Demo Location"
    },
    "idleMins": 42
   },
   "driver": {
    "id": "DEMO-0338",
    "name": "Demo Name",
    "phone": "+973 3935 0330",
    "licenseNo": "DEMO-0339",
    "licenseClass": "Heavy",
    "licenseExpiry": "+973 3935 0330",
    "status": "on-duty",
    "assignedVehicleId": "veh-007",
    "rating": 4.7,
    "tripsCompleted": 301,
    "hoursThisWeek": 44,
    "cpr": "+973 3935 0330",
    "joinDate": "+973 3935 0330",
    "emergencyContact": "+973 3935 0330",
    "vehicle": {
     "id": "DEMO-0340",
     "plate": "DEMO-0341",
     "name": "Demo Name",
     "type": "Reefer",
     "make": "Mitsubishi",
     "model": "Fuso Canter",
     "year": 2022,
     "capacity": "3.5 tons",
     "status": "on-trip",
     "fuelLevel": 37,
     "odometer": 67210,
     "gps": {
      "lat": 26.142,
      "lng": 50.65,
      "location": "Demo Location"
     },
     "assignedDriverId": "drv-004",
     "insuranceExpiry": "+973 3935 0330",
     "registrationExpiry": "+973 3935 0330",
     "lastService": "+973 3935 0330",
     "nextServiceDue": "+973 3935 0330",
     "notes": "Demo reference entry"
    },
    "licenseDays": 9,
    "baseSalary": 650
   }
  },
  {
   "id": "DEMO-0342",
   "code": "DEMO-0343",
   "driverId": "drv-004",
   "vehicleId": "veh-007",
   "status": "completed",
   "stage": "completed",
   "startedAt": "+973 3935 0330",
   "completedAt": "+973 3935 0330",
   "destination": "Demo Destination",
   "fare": 45,
   "vehicle": {
    "id": "DEMO-0344",
    "plate": "DEMO-0345",
    "name": "Demo Name",
    "type": "Reefer",
    "make": "Mitsubishi",
    "model": "Fuso Canter",
    "year": 2022,
    "capacity": "3.5 tons",
    "status": "on-trip",
    "fuelLevel": 37,
    "odometer": 67210,
    "gps": {
     "lat": 26.142,
     "lng": 50.65,
     "location": "Demo Location"
    },
    "assignedDriverId": "drv-004",
    "insuranceExpiry": "+973 3935 0330",
    "registrationExpiry": "+973 3935 0330",
    "lastService": "+973 3935 0330",
    "nextServiceDue": "+973 3935 0330",
    "notes": "Demo reference entry",
    "driver": {
     "id": "DEMO-0346",
     "name": "Demo Name",
     "phone": "+973 3935 0330",
     "licenseNo": "DEMO-0347",
     "licenseClass": "Heavy",
     "licenseExpiry": "+973 3935 0330",
     "status": "on-duty",
     "assignedVehicleId": "veh-007",
     "rating": 4.7,
     "tripsCompleted": 301,
     "hoursThisWeek": 44,
     "cpr": "+973 3935 0330",
     "joinDate": "+973 3935 0330",
     "emergencyContact": "+973 3935 0330"
    },
    "insuranceDays": 88,
    "registrationDays": 160,
    "serviceDays": 10,
    "home": {
     "lat": 26.142,
     "lng": 50.65,
     "location": "Demo Location"
    },
    "idleMins": 42
   },
   "driver": {
    "id": "DEMO-0348",
    "name": "Demo Name",
    "phone": "+973 3935 0330",
    "licenseNo": "DEMO-0349",
    "licenseClass": "Heavy",
    "licenseExpiry": "+973 3935 0330",
    "status": "on-duty",
    "assignedVehicleId": "veh-007",
    "rating": 4.7,
    "tripsCompleted": 301,
    "hoursThisWeek": 44,
    "cpr": "+973 3935 0330",
    "joinDate": "+973 3935 0330",
    "emergencyContact": "+973 3935 0330",
    "vehicle": {
     "id": "DEMO-0350",
     "plate": "DEMO-0351",
     "name": "Demo Name",
     "type": "Reefer",
     "make": "Mitsubishi",
     "model": "Fuso Canter",
     "year": 2022,
     "capacity": "3.5 tons",
     "status": "on-trip",
     "fuelLevel": 37,
     "odometer": 67210,
     "gps": {
      "lat": 26.142,
      "lng": 50.65,
      "location": "Demo Location"
     },
     "assignedDriverId": "drv-004",
     "insuranceExpiry": "+973 3935 0330",
     "registrationExpiry": "+973 3935 0330",
     "lastService": "+973 3935 0330",
     "nextServiceDue": "+973 3935 0330",
     "notes": "Demo reference entry"
    },
    "licenseDays": 9,
    "baseSalary": 650
   }
  }
 ],
 "/api/maintenance": [
  {
   "id": "DEMO-0352",
   "vehicleId": "veh-002",
   "type": "From receipt",
   "title": "Demo Title",
   "status": "completed",
   "workshop": "Demo Workshop",
   "cost": 340,
   "openedAt": "+973 3935 0330",
   "dueAt": "+973 3935 0330",
   "technician": "Demo Technician",
   "vehicle": {
    "id": "DEMO-0353",
    "plate": "DEMO-0354",
    "name": "Demo Name",
    "type": "Flatbed",
    "make": "Hino",
    "model": "500 Series",
    "year": 2021,
    "capacity": "12 tons",
    "status": "on-trip",
    "fuelLevel": 41,
    "odometer": 126440,
    "gps": {
     "lat": 26.2286,
     "lng": 50.6017,
     "location": "Demo Location"
    },
    "assignedDriverId": "drv-002",
    "insuranceExpiry": "+973 3935 0330",
    "registrationExpiry": "+973 3935 0330",
    "lastService": "+973 3935 0330",
    "nextServiceDue": "+973 3935 0330",
    "notes": "Demo reference entry",
    "driver": {
     "id": "DEMO-0355",
     "name": "Demo Name",
     "phone": "+973 3935 0330",
     "licenseNo": "DEMO-0356",
     "licenseClass": "Heavy Articulated",
     "licenseExpiry": "+973 3935 0330",
     "status": "on-duty",
     "assignedVehicleId": "veh-002",
     "rating": 4.8,
     "tripsCompleted": 538,
     "hoursThisWeek": 41,
     "cpr": "+973 3935 0330",
     "joinDate": "+973 3935 0330",
     "emergencyContact": "+973 3935 0330"
    },
    "insuranceDays": 44,
    "registrationDays": 120,
    "serviceDays": 4,
    "home": null,
    "tripKm": 15.206018989723434,
    "idleMins": 0
   }
  },
  {
   "id": "DEMO-0357",
   "vehicleId": "veh-002",
   "type": "From receipt",
   "title": "Demo Title",
   "status": "completed",
   "workshop": "Demo Workshop",
   "cost": 340,
   "openedAt": "+973 3935 0330",
   "dueAt": "+973 3935 0330",
   "technician": "Demo Technician",
   "vehicle": {
    "id": "DEMO-0358",
    "plate": "DEMO-0359",
    "name": "Demo Name",
    "type": "Flatbed",
    "make": "Hino",
    "model": "500 Series",
    "year": 2021,
    "capacity": "12 tons",
    "status": "on-trip",
    "fuelLevel": 41,
    "odometer": 126440,
    "gps": {
     "lat": 26.2286,
     "lng": 50.6017,
     "location": "Demo Location"
    },
    "assignedDriverId": "drv-002",
    "insuranceExpiry": "+973 3935 0330",
    "registrationExpiry": "+973 3935 0330",
    "lastService": "+973 3935 0330",
    "nextServiceDue": "+973 3935 0330",
    "notes": "Demo reference entry",
    "driver": {
     "id": "DEMO-0360",
     "name": "Demo Name",
     "phone": "+973 3935 0330",
     "licenseNo": "DEMO-0361",
     "licenseClass": "Heavy Articulated",
     "licenseExpiry": "+973 3935 0330",
     "status": "on-duty",
     "assignedVehicleId": "veh-002",
     "rating": 4.8,
     "tripsCompleted": 538,
     "hoursThisWeek": 41,
     "cpr": "+973 3935 0330",
     "joinDate": "+973 3935 0330",
     "emergencyContact": "+973 3935 0330"
    },
    "insuranceDays": 44,
    "registrationDays": 120,
    "serviceDays": 4,
    "home": null,
    "tripKm": 15.206018989723434,
    "idleMins": 0
   }
  },
  {
   "id": "DEMO-0362",
   "vehicleId": "veh-002",
   "type": "From receipt",
   "title": "Demo Title",
   "status": "completed",
   "workshop": "Demo Workshop",
   "cost": 340,
   "openedAt": "+973 3935 0330",
   "dueAt": "+973 3935 0330",
   "technician": "Demo Technician",
   "vehicle": {
    "id": "DEMO-0363",
    "plate": "DEMO-0364",
    "name": "Demo Name",
    "type": "Flatbed",
    "make": "Hino",
    "model": "500 Series",
    "year": 2021,
    "capacity": "12 tons",
    "status": "on-trip",
    "fuelLevel": 41,
    "odometer": 126440,
    "gps": {
     "lat": 26.2286,
     "lng": 50.6017,
     "location": "Demo Location"
    },
    "assignedDriverId": "drv-002",
    "insuranceExpiry": "+973 3935 0330",
    "registrationExpiry": "+973 3935 0330",
    "lastService": "+973 3935 0330",
    "nextServiceDue": "+973 3935 0330",
    "notes": "Demo reference entry",
    "driver": {
     "id": "DEMO-0365",
     "name": "Demo Name",
     "phone": "+973 3935 0330",
     "licenseNo": "DEMO-0366",
     "licenseClass": "Heavy Articulated",
     "licenseExpiry": "+973 3935 0330",
     "status": "on-duty",
     "assignedVehicleId": "veh-002",
     "rating": 4.8,
     "tripsCompleted": 538,
     "hoursThisWeek": 41,
     "cpr": "+973 3935 0330",
     "joinDate": "+973 3935 0330",
     "emergencyContact": "+973 3935 0330"
    },
    "insuranceDays": 44,
    "registrationDays": 120,
    "serviceDays": 4,
    "home": null,
    "tripKm": 15.206018989723434,
    "idleMins": 0
   }
  },
  {
   "id": "DEMO-0367",
   "vehicleId": "veh-004",
   "type": "Corrective",
   "title": "Demo Title",
   "status": "in-progress",
   "workshop": "Demo Workshop",
   "cost": 920,
   "openedAt": "+973 3935 0330",
   "dueAt": "+973 3935 0330",
   "technician": "Demo Technician",
   "vehicle": {
    "id": "DEMO-0368",
    "plate": "DEMO-0369",
    "name": "Demo Name",
    "type": "Trailer",
    "make": "Volvo",
    "model": "FH16",
    "year": 2020,
    "capacity": "24 tons",
    "status": "maintenance",
    "fuelLevel": 22,
    "odometer": 214900,
    "gps": {
     "lat": 26.1702,
     "lng": 50.547,
     "location": "Demo Location"
    },
    "assignedDriverId": null,
    "insuranceExpiry": "+973 3935 0330",
    "registrationExpiry": "+973 3935 0330",
    "lastService": "+973 3935 0330",
    "nextServiceDue": "+973 3935 0330",
    "notes": "Demo reference entry",
    "driver": null,
    "insuranceDays": 12,
    "registrationDays": 55,
    "serviceDays": 28,
    "home": {
     "lat": 26.1702,
     "lng": 50.547,
     "location": "Demo Location"
    }
   }
  },
  {
   "id": "DEMO-0370",
   "vehicleId": "veh-002",
   "type": "Preventive",
   "title": "Demo Title",
   "status": "scheduled",
   "workshop": "Demo Workshop",
   "cost": 340,
   "openedAt": "+973 3935 0330",
   "dueAt": "+973 3935 0330",
   "technician": "Demo Technician",
   "vehicle": {
    "id": "DEMO-0371",
    "plate": "DEMO-0372",
    "name": "Demo Name",
    "type": "Flatbed",
    "make": "Hino",
    "model": "500 Series",
    "year": 2021,
    "capacity": "12 tons",
    "status": "on-trip",
    "fuelLevel": 41,
    "odometer": 126440,
    "gps": {
     "lat": 26.2286,
     "lng": 50.6017,
     "location": "Demo Location"
    },
    "assignedDriverId": "drv-002",
    "insuranceExpiry": "+973 3935 0330",
    "registrationExpiry": "+973 3935 0330",
    "lastService": "+973 3935 0330",
    "nextServiceDue": "+973 3935 0330",
    "notes": "Demo reference entry",
    "driver": {
     "id": "DEMO-0373",
     "name": "Demo Name",
     "phone": "+973 3935 0330",
     "licenseNo": "DEMO-0374",
     "licenseClass": "Heavy Articulated",
     "licenseExpiry": "+973 3935 0330",
     "status": "on-duty",
     "assignedVehicleId": "veh-002",
     "rating": 4.8,
     "tripsCompleted": 538,
     "hoursThisWeek": 41,
     "cpr": "+973 3935 0330",
     "joinDate": "+973 3935 0330",
     "emergencyContact": "+973 3935 0330"
    },
    "insuranceDays": 44,
    "registrationDays": 120,
    "serviceDays": 4,
    "home": null,
    "tripKm": 15.206018989723434,
    "idleMins": 0
   }
  },
  {
   "id": "DEMO-0375",
   "vehicleId": "veh-007",
   "type": "Preventive",
   "title": "Demo Title",
   "status": "scheduled",
   "workshop": "Demo Workshop",
   "cost": 210,
   "openedAt": "+973 3935 0330",
   "dueAt": "+973 3935 0330",
   "technician": "Demo Technician",
   "vehicle": {
    "id": "DEMO-0376",
    "plate": "DEMO-0377",
    "name": "Demo Name",
    "type": "Reefer",
    "make": "Mitsubishi",
    "model": "Fuso Canter",
    "year": 2022,
    "capacity": "3.5 tons",
    "status": "on-trip",
    "fuelLevel": 37,
    "odometer": 67210,
    "gps": {
     "lat": 26.142,
     "lng": 50.65,
     "location": "Demo Location"
    },
    "assignedDriverId": "drv-004",
    "insuranceExpiry": "+973 3935 0330",
    "registrationExpiry": "+973 3935 0330",
    "lastService": "+973 3935 0330",
    "nextServiceDue": "+973 3935 0330",
    "notes": "Demo reference entry",
    "driver": {
     "id": "DEMO-0378",
     "name": "Demo Name",
     "phone": "+973 3935 0330",
     "licenseNo": "DEMO-0379",
     "licenseClass": "Heavy",
     "licenseExpiry": "+973 3935 0330",
     "status": "on-duty",
     "assignedVehicleId": "veh-007",
     "rating": 4.7,
     "tripsCompleted": 301,
     "hoursThisWeek": 44,
     "cpr": "+973 3935 0330",
     "joinDate": "+973 3935 0330",
     "emergencyContact": "+973 3935 0330"
    },
    "insuranceDays": 88,
    "registrationDays": 160,
    "serviceDays": 10,
    "home": {
     "lat": 26.142,
     "lng": 50.65,
     "location": "Demo Location"
    },
    "idleMins": 42
   }
  },
  {
   "id": "DEMO-0380",
   "vehicleId": "veh-001",
   "type": "Inspection",
   "title": "Demo Title",
   "status": "completed",
   "workshop": "Demo Workshop",
   "cost": 145,
   "openedAt": "+973 3935 0330",
   "dueAt": "+973 3935 0330",
   "technician": "Demo Technician",
   "vehicle": {
    "id": "DEMO-0381",
    "plate": "DEMO-0382",
    "name": "Demo Name",
    "type": "Box Truck",
    "make": "Isuzu",
    "model": "NPR 75",
    "year": 2022,
    "capacity": "5.5 tons",
    "status": "active",
    "fuelLevel": 78,
    "odometer": 84210,
    "gps": {
     "lat": 26.2,
     "lng": 50.5,
     "location": "Demo Location"
    },
    "assignedDriverId": "drv-001",
    "insuranceExpiry": "+973 3935 0330",
    "registrationExpiry": "+973 3935 0330",
    "lastService": "+973 3935 0330",
    "nextServiceDue": "+973 3935 0330",
    "notes": "Demo reference entry",
    "driver": {
     "id": "DEMO-0383",
     "name": "Demo Name",
     "phone": "+973 3935 0330",
     "licenseNo": "DEMO-0384",
     "licenseClass": "Heavy",
     "licenseExpiry": "+973 3935 0330",
     "status": "on-duty",
     "assignedVehicleId": "veh-001",
     "rating": 4.9,
     "tripsCompleted": 412,
     "hoursThisWeek": 38,
     "cpr": "+973 3935 0330",
     "joinDate": "+973 3935 0330",
     "emergencyContact": "+973 3935 0330"
    },
    "insuranceDays": 96,
    "registrationDays": 210,
    "serviceDays": 18,
    "home": {
     "lat": 26.2075,
     "lng": 50.5906,
     "location": "Demo Location"
    },
    "idleMins": 0,
    "tripKm": 12.053043054654875,
    "photo": null
   }
  },
  {
   "id": "DEMO-0385",
   "vehicleId": "veh-005",
   "type": "Preventive",
   "title": "Demo Title",
   "status": "open",
   "workshop": "Demo Workshop",
   "cost": 180,
   "openedAt": "+973 3935 0330",
   "dueAt": "+973 3935 0330",
   "technician": "Demo Technician",
   "vehicle": {
    "id": "DEMO-0386",
    "plate": "DEMO-0387",
    "name": "Demo Name",
    "type": "Bus",
    "make": "Yutong",
    "model": "ZK6122H",
    "year": 2019,
    "capacity": "45 seats",
    "status": "idle",
    "fuelLevel": 64,
    "odometer": 178220,
    "gps": {
     "lat": 26.2128,
     "lng": 50.6872,
     "location": "Demo Location"
    },
    "assignedDriverId": "drv-005",
    "insuranceExpiry": "+973 3935 0330",
    "registrationExpiry": "+973 3935 0330",
    "lastService": "+973 3935 0330",
    "nextServiceDue": "+973 3935 0330",
    "notes": "Demo reference entry",
    "driver": {
     "id": "DEMO-0388",
     "name": "Demo Name",
     "phone": "+973 3935 0330",
     "licenseNo": "DEMO-0389",
     "licenseClass": "Passenger Bus",
     "licenseExpiry": "+973 3935 0330",
     "status": "standby",
     "assignedVehicleId": "veh-005",
     "rating": 4.6,
     "tripsCompleted": 267,
     "hoursThisWeek": 18,
     "cpr": "+973 3935 0330",
     "joinDate": "+973 3935 0330",
     "emergencyContact": "+973 3935 0330"
    },
    "insuranceDays": 70,
    "registrationDays": 140,
    "serviceDays": 15,
    "home": {
     "lat": 26.2128,
     "lng": 50.6872,
     "location": "Demo Location"
    }
   }
  }
 ],
 "/api/fuel": [
  {
   "id": "DEMO-0390",
   "vehicleId": "veh-002",
   "liters": 65,
   "cost": 26,
   "station": "Demo Station",
   "filledAt": "+973 3935 0330",
   "odometer": 126440,
   "vehicle": {
    "id": "DEMO-0391",
    "plate": "DEMO-0392",
    "name": "Demo Name",
    "type": "Flatbed",
    "make": "Hino",
    "model": "500 Series",
    "year": 2021,
    "capacity": "12 tons",
    "status": "on-trip",
    "fuelLevel": 41,
    "odometer": 126440,
    "gps": {
     "lat": 26.2286,
     "lng": 50.6017,
     "location": "Demo Location"
    },
    "assignedDriverId": "drv-002",
    "insuranceExpiry": "+973 3935 0330",
    "registrationExpiry": "+973 3935 0330",
    "lastService": "+973 3935 0330",
    "nextServiceDue": "+973 3935 0330",
    "notes": "Demo reference entry",
    "driver": {
     "id": "DEMO-0393",
     "name": "Demo Name",
     "phone": "+973 3935 0330",
     "licenseNo": "DEMO-0394",
     "licenseClass": "Heavy Articulated",
     "licenseExpiry": "+973 3935 0330",
     "status": "on-duty",
     "assignedVehicleId": "veh-002",
     "rating": 4.8,
     "tripsCompleted": 538,
     "hoursThisWeek": 41,
     "cpr": "+973 3935 0330",
     "joinDate": "+973 3935 0330",
     "emergencyContact": "+973 3935 0330"
    },
    "insuranceDays": 44,
    "registrationDays": 120,
    "serviceDays": 4,
    "home": null,
    "tripKm": 15.206018989723434,
    "idleMins": 0
   }
  },
  {
   "id": "DEMO-0395",
   "vehicleId": "veh-002",
   "liters": 65,
   "cost": 26,
   "station": "Demo Station",
   "filledAt": "+973 3935 0330",
   "odometer": 126440,
   "vehicle": {
    "id": "DEMO-0396",
    "plate": "DEMO-0397",
    "name": "Demo Name",
    "type": "Flatbed",
    "make": "Hino",
    "model": "500 Series",
    "year": 2021,
    "capacity": "12 tons",
    "status": "on-trip",
    "fuelLevel": 41,
    "odometer": 126440,
    "gps": {
     "lat": 26.2286,
     "lng": 50.6017,
     "location": "Demo Location"
    },
    "assignedDriverId": "drv-002",
    "insuranceExpiry": "+973 3935 0330",
    "registrationExpiry": "+973 3935 0330",
    "lastService": "+973 3935 0330",
    "nextServiceDue": "+973 3935 0330",
    "notes": "Demo reference entry",
    "driver": {
     "id": "DEMO-0398",
     "name": "Demo Name",
     "phone": "+973 3935 0330",
     "licenseNo": "DEMO-0399",
     "licenseClass": "Heavy Articulated",
     "licenseExpiry": "+973 3935 0330",
     "status": "on-duty",
     "assignedVehicleId": "veh-002",
     "rating": 4.8,
     "tripsCompleted": 538,
     "hoursThisWeek": 41,
     "cpr": "+973 3935 0330",
     "joinDate": "+973 3935 0330",
     "emergencyContact": "+973 3935 0330"
    },
    "insuranceDays": 44,
    "registrationDays": 120,
    "serviceDays": 4,
    "home": null,
    "tripKm": 15.206018989723434,
    "idleMins": 0
   }
  },
  {
   "id": "DEMO-0400",
   "vehicleId": "veh-002",
   "liters": 65,
   "cost": 26,
   "station": "Demo Station",
   "filledAt": "+973 3935 0330",
   "odometer": 126440,
   "vehicle": {
    "id": "DEMO-0401",
    "plate": "DEMO-0402",
    "name": "Demo Name",
    "type": "Flatbed",
    "make": "Hino",
    "model": "500 Series",
    "year": 2021,
    "capacity": "12 tons",
    "status": "on-trip",
    "fuelLevel": 41,
    "odometer": 126440,
    "gps": {
     "lat": 26.2286,
     "lng": 50.6017,
     "location": "Demo Location"
    },
    "assignedDriverId": "drv-002",
    "insuranceExpiry": "+973 3935 0330",
    "registrationExpiry": "+973 3935 0330",
    "lastService": "+973 3935 0330",
    "nextServiceDue": "+973 3935 0330",
    "notes": "Demo reference entry",
    "driver": {
     "id": "DEMO-0403",
     "name": "Demo Name",
     "phone": "+973 3935 0330",
     "licenseNo": "DEMO-0404",
     "licenseClass": "Heavy Articulated",
     "licenseExpiry": "+973 3935 0330",
     "status": "on-duty",
     "assignedVehicleId": "veh-002",
     "rating": 4.8,
     "tripsCompleted": 538,
     "hoursThisWeek": 41,
     "cpr": "+973 3935 0330",
     "joinDate": "+973 3935 0330",
     "emergencyContact": "+973 3935 0330"
    },
    "insuranceDays": 44,
    "registrationDays": 120,
    "serviceDays": 4,
    "home": null,
    "tripKm": 15.206018989723434,
    "idleMins": 0
   }
  },
  {
   "id": "DEMO-0405",
   "vehicleId": "v1",
   "liters": 11,
   "cost": 9,
   "station": "Demo Station",
   "filledAt": "+973 3935 0330",
   "odometer": 11111,
   "vehicle": null
  },
  {
   "id": "DEMO-0406",
   "vehicleId": "veh-001",
   "liters": 80,
   "cost": 32,
   "station": "Demo Station",
   "filledAt": "+973 3935 0330",
   "odometer": 84140,
   "vehicle": {
    "id": "DEMO-0407",
    "plate": "DEMO-0408",
    "name": "Demo Name",
    "type": "Box Truck",
    "make": "Isuzu",
    "model": "NPR 75",
    "year": 2022,
    "capacity": "5.5 tons",
    "status": "active",
    "fuelLevel": 78,
    "odometer": 84210,
    "gps": {
     "lat": 26.2,
     "lng": 50.5,
     "location": "Demo Location"
    },
    "assignedDriverId": "drv-001",
    "insuranceExpiry": "+973 3935 0330",
    "registrationExpiry": "+973 3935 0330",
    "lastService": "+973 3935 0330",
    "nextServiceDue": "+973 3935 0330",
    "notes": "Demo reference entry",
    "driver": {
     "id": "DEMO-0409",
     "name": "Demo Name",
     "phone": "+973 3935 0330",
     "licenseNo": "DEMO-0410",
     "licenseClass": "Heavy",
     "licenseExpiry": "+973 3935 0330",
     "status": "on-duty",
     "assignedVehicleId": "veh-001",
     "rating": 4.9,
     "tripsCompleted": 412,
     "hoursThisWeek": 38,
     "cpr": "+973 3935 0330",
     "joinDate": "+973 3935 0330",
     "emergencyContact": "+973 3935 0330"
    },
    "insuranceDays": 96,
    "registrationDays": 210,
    "serviceDays": 18,
    "home": {
     "lat": 26.2075,
     "lng": 50.5906,
     "location": "Demo Location"
    },
    "idleMins": 0,
    "tripKm": 12.053043054654875,
    "photo": null
   }
  },
  {
   "id": "DEMO-0411",
   "vehicleId": "veh-002",
   "liters": 140,
   "cost": 56,
   "station": "Demo Station",
   "filledAt": "+973 3935 0330",
   "odometer": 126300,
   "vehicle": {
    "id": "DEMO-0412",
    "plate": "DEMO-0413",
    "name": "Demo Name",
    "type": "Flatbed",
    "make": "Hino",
    "model": "500 Series",
    "year": 2021,
    "capacity": "12 tons",
    "status": "on-trip",
    "fuelLevel": 41,
    "odometer": 126440,
    "gps": {
     "lat": 26.2286,
     "lng": 50.6017,
     "location": "Demo Location"
    },
    "assignedDriverId": "drv-002",
    "insuranceExpiry": "+973 3935 0330",
    "registrationExpiry": "+973 3935 0330",
    "lastService": "+973 3935 0330",
    "nextServiceDue": "+973 3935 0330",
    "notes": "Demo reference entry",
    "driver": {
     "id": "DEMO-0414",
     "name": "Demo Name",
     "phone": "+973 3935 0330",
     "licenseNo": "DEMO-0415",
     "licenseClass": "Heavy Articulated",
     "licenseExpiry": "+973 3935 0330",
     "status": "on-duty",
     "assignedVehicleId": "veh-002",
     "rating": 4.8,
     "tripsCompleted": 538,
     "hoursThisWeek": 41,
     "cpr": "+973 3935 0330",
     "joinDate": "+973 3935 0330",
     "emergencyContact": "+973 3935 0330"
    },
    "insuranceDays": 44,
    "registrationDays": 120,
    "serviceDays": 4,
    "home": null,
    "tripKm": 15.206018989723434,
    "idleMins": 0
   }
  },
  {
   "id": "DEMO-0416",
   "vehicleId": "veh-007",
   "liters": 70,
   "cost": 28,
   "station": "Demo Station",
   "filledAt": "+973 3935 0330",
   "odometer": 67140,
   "vehicle": {
    "id": "DEMO-0417",
    "plate": "DEMO-0418",
    "name": "Demo Name",
    "type": "Reefer",
    "make": "Mitsubishi",
    "model": "Fuso Canter",
    "year": 2022,
    "capacity": "3.5 tons",
    "status": "on-trip",
    "fuelLevel": 37,
    "odometer": 67210,
    "gps": {
     "lat": 26.142,
     "lng": 50.65,
     "location": "Demo Location"
    },
    "assignedDriverId": "drv-004",
    "insuranceExpiry": "+973 3935 0330",
    "registrationExpiry": "+973 3935 0330",
    "lastService": "+973 3935 0330",
    "nextServiceDue": "+973 3935 0330",
    "notes": "Demo reference entry",
    "driver": {
     "id": "DEMO-0419",
     "name": "Demo Name",
     "phone": "+973 3935 0330",
     "licenseNo": "DEMO-0420",
     "licenseClass": "Heavy",
     "licenseExpiry": "+973 3935 0330",
     "status": "on-duty",
     "assignedVehicleId": "veh-007",
     "rating": 4.7,
     "tripsCompleted": 301,
     "hoursThisWeek": 44,
     "cpr": "+973 3935 0330",
     "joinDate": "+973 3935 0330",
     "emergencyContact": "+973 3935 0330"
    },
    "insuranceDays": 88,
    "registrationDays": 160,
    "serviceDays": 10,
    "home": {
     "lat": 26.142,
     "lng": 50.65,
     "location": "Demo Location"
    },
    "idleMins": 42
   }
  },
  {
   "id": "DEMO-0421",
   "vehicleId": "veh-003",
   "liters": 45,
   "cost": 18,
   "station": "Demo Station",
   "filledAt": "+973 3935 0330",
   "odometer": 31820,
   "vehicle": {
    "id": "DEMO-0422",
    "plate": "DEMO-0423",
    "name": "Demo Name",
    "type": "Cargo Van",
    "make": "Mercedes-Benz",
    "model": "Sprinter 316",
    "year": 2023,
    "capacity": "1.8 tons",
    "status": "active",
    "fuelLevel": 92,
    "odometer": 31880,
    "gps": {
     "lat": 26.2361,
     "lng": 50.536,
     "location": "Demo Location"
    },
    "assignedDriverId": "drv-003",
    "insuranceExpiry": "+973 3935 0330",
    "registrationExpiry": "+973 3935 0330",
    "lastService": "+973 3935 0330",
    "nextServiceDue": "+973 3935 0330",
    "notes": "Demo reference entry",
    "driver": {
     "id": "DEMO-0424",
     "name": "Demo Name",
     "phone": "+973 3935 0330",
     "licenseNo": "DEMO-0425",
     "licenseClass": "Light Commercial",
     "licenseExpiry": "+973 3935 0330",
     "status": "on-duty",
     "assignedVehicleId": "veh-003",
     "rating": 5,
     "tripsCompleted": 198,
     "hoursThisWeek": 32,
     "cpr": "+973 3935 0330",
     "joinDate": "+973 3935 0330",
     "emergencyContact": "+973 3935 0330"
    },
    "insuranceDays": 180,
    "registrationDays": 300,
    "serviceDays": 48,
    "home": {
     "lat": 26.2361,
     "lng": 50.536,
     "location": "Demo Location"
    }
   }
  },
  {
   "id": "DEMO-0426",
   "vehicleId": "veh-006",
   "liters": 50,
   "cost": 20,
   "station": "Demo Station",
   "filledAt": "+973 3935 0330",
   "odometer": 12390,
   "vehicle": {
    "id": "DEMO-0427",
    "plate": "DEMO-0428",
    "name": "Demo Name",
    "type": "Pickup",
    "make": "Toyota",
    "model": "Hilux",
    "year": 2024,
    "capacity": "1 ton",
    "status": "active",
    "fuelLevel": 55,
    "odometer": 12450,
    "gps": {
     "lat": 26.2442,
     "lng": 50.611,
     "location": "Demo Location"
    },
    "assignedDriverId": "drv-006",
    "insuranceExpiry": "+973 3935 0330",
    "registrationExpiry": "+973 3935 0330",
    "lastService": "+973 3935 0330",
    "nextServiceDue": "+973 3935 0330",
    "notes": "Demo reference entry",
    "driver": {
     "id": "DEMO-0429",
     "name": "Demo Name",
     "phone": "+973 3935 0330",
     "licenseNo": "DEMO-0430",
     "licenseClass": "Light Commercial",
     "licenseExpiry": "+973 3935 0330",
     "status": "on-duty",
     "assignedVehicleId": "veh-006",
     "rating": 4.9,
     "tripsCompleted": 88,
     "hoursThisWeek": 29,
     "cpr": "+973 3935 0330",
     "joinDate": "+973 3935 0330",
     "emergencyContact": "+973 3935 0330"
    },
    "insuranceDays": 250,
    "registrationDays": 310,
    "serviceDays": 52,
    "home": {
     "lat": 26.2442,
     "lng": 50.611,
     "location": "Demo Location"
    }
   }
  },
  {
   "id": "DEMO-0431",
   "vehicleId": "veh-005",
   "liters": 160,
   "cost": 64,
   "station": "Demo Station",
   "filledAt": "+973 3935 0330",
   "odometer": 177980,
   "vehicle": {
    "id": "DEMO-0432",
    "plate": "DEMO-0433",
    "name": "Demo Name",
    "type": "Bus",
    "make": "Yutong",
    "model": "ZK6122H",
    "year": 2019,
    "capacity": "45 seats",
    "status": "idle",
    "fuelLevel": 64,
    "odometer": 178220,
    "gps": {
     "lat": 26.2128,
     "lng": 50.6872,
     "location": "Demo Location"
    },
    "assignedDriverId": "drv-005",
    "insuranceExpiry": "+973 3935 0330",
    "registrationExpiry": "+973 3935 0330",
    "lastService": "+973 3935 0330",
    "nextServiceDue": "+973 3935 0330",
    "notes": "Demo reference entry",
    "driver": {
     "id": "DEMO-0434",
     "name": "Demo Name",
     "phone": "+973 3935 0330",
     "licenseNo": "DEMO-0435",
     "licenseClass": "Passenger Bus",
     "licenseExpiry": "+973 3935 0330",
     "status": "standby",
     "assignedVehicleId": "veh-005",
     "rating": 4.6,
     "tripsCompleted": 267,
     "hoursThisWeek": 18,
     "cpr": "+973 3935 0330",
     "joinDate": "+973 3935 0330",
     "emergencyContact": "+973 3935 0330"
    },
    "insuranceDays": 70,
    "registrationDays": 140,
    "serviceDays": 15,
    "home": {
     "lat": 26.2128,
     "lng": 50.6872,
     "location": "Demo Location"
    }
   }
  }
 ],
 "/api/incidents": [
  {
   "id": "DEMO-0436",
   "vehicleId": "veh-002",
   "driverId": "drv-002",
   "severity": "low",
   "type": "Near miss",
   "status": "closed",
   "title": "Demo Title",
   "occurredAt": "+973 3935 0330",
   "notes": "Demo reference entry",
   "vehicle": {
    "id": "DEMO-0437",
    "plate": "DEMO-0438",
    "name": "Demo Name",
    "type": "Flatbed",
    "make": "Hino",
    "model": "500 Series",
    "year": 2021,
    "capacity": "12 tons",
    "status": "on-trip",
    "fuelLevel": 41,
    "odometer": 126440,
    "gps": {
     "lat": 26.2286,
     "lng": 50.6017,
     "location": "Demo Location"
    },
    "assignedDriverId": "drv-002",
    "insuranceExpiry": "+973 3935 0330",
    "registrationExpiry": "+973 3935 0330",
    "lastService": "+973 3935 0330",
    "nextServiceDue": "+973 3935 0330",
    "notes": "Demo reference entry",
    "driver": {
     "id": "DEMO-0439",
     "name": "Demo Name",
     "phone": "+973 3935 0330",
     "licenseNo": "DEMO-0440",
     "licenseClass": "Heavy Articulated",
     "licenseExpiry": "+973 3935 0330",
     "status": "on-duty",
     "assignedVehicleId": "veh-002",
     "rating": 4.8,
     "tripsCompleted": 538,
     "hoursThisWeek": 41,
     "cpr": "+973 3935 0330",
     "joinDate": "+973 3935 0330",
     "emergencyContact": "+973 3935 0330"
    },
    "insuranceDays": 44,
    "registrationDays": 120,
    "serviceDays": 4,
    "home": null,
    "tripKm": 15.206018989723434,
    "idleMins": 0
   },
   "driver": {
    "id": "DEMO-0441",
    "name": "Demo Name",
    "phone": "+973 3935 0330",
    "licenseNo": "DEMO-0442",
    "licenseClass": "Heavy Articulated",
    "licenseExpiry": "+973 3935 0330",
    "status": "on-duty",
    "assignedVehicleId": "veh-002",
    "rating": 4.8,
    "tripsCompleted": 538,
    "hoursThisWeek": 41,
    "cpr": "+973 3935 0330",
    "joinDate": "+973 3935 0330",
    "emergencyContact": "+973 3935 0330",
    "vehicle": {
     "id": "DEMO-0443",
     "plate": "DEMO-0444",
     "name": "Demo Name",
     "type": "Flatbed",
     "make": "Hino",
     "model": "500 Series",
     "year": 2021,
     "capacity": "12 tons",
     "status": "on-trip",
     "fuelLevel": 41,
     "odometer": 126440,
     "gps": {
      "lat": 26.2285,
      "lng": 50.586,
      "location": "Demo Location"
     },
     "assignedDriverId": "drv-002",
     "insuranceExpiry": "+973 3935 0330",
     "registrationExpiry": "+973 3935 0330",
     "lastService": "+973 3935 0330",
     "nextServiceDue": "+973 3935 0330",
     "notes": "Demo reference entry"
    },
    "licenseDays": 22,
    "baseSalary": 700
   }
  },
  {
   "id": "DEMO-0445",
   "vehicleId": "veh-004",
   "driverId": "drv-007",
   "severity": "medium",
   "type": "Mechanical",
   "status": "open",
   "title": "Demo Title",
   "occurredAt": "+973 3935 0330",
   "notes": "Demo reference entry",
   "vehicle": {
    "id": "DEMO-0446",
    "plate": "DEMO-0447",
    "name": "Demo Name",
    "type": "Trailer",
    "make": "Volvo",
    "model": "FH16",
    "year": 2020,
    "capacity": "24 tons",
    "status": "maintenance",
    "fuelLevel": 22,
    "odometer": 214900,
    "gps": {
     "lat": 26.1702,
     "lng": 50.547,
     "location": "Demo Location"
    },
    "assignedDriverId": null,
    "insuranceExpiry": "+973 3935 0330",
    "registrationExpiry": "+973 3935 0330",
    "lastService": "+973 3935 0330",
    "nextServiceDue": "+973 3935 0330",
    "notes": "Demo reference entry",
    "driver": null,
    "insuranceDays": 12,
    "registrationDays": 55,
    "serviceDays": 28,
    "home": {
     "lat": 26.1702,
     "lng": 50.547,
     "location": "Demo Location"
    }
   },
   "driver": {
    "id": "DEMO-0448",
    "name": "Demo Name",
    "phone": "+973 3935 0330",
    "licenseNo": "DEMO-0449",
    "licenseClass": "Heavy",
    "licenseExpiry": "+973 3935 0330",
    "status": "off-duty",
    "assignedVehicleId": null,
    "rating": 4.5,
    "tripsCompleted": 224,
    "hoursThisWeek": 0,
    "cpr": "+973 3935 0330",
    "joinDate": "+973 3935 0330",
    "emergencyContact": "+973 3935 0330",
    "vehicle": null,
    "licenseDays": 160,
    "baseSalary": 640
   }
  }
 ],
 "/api/quotes": [
  {
   "id": "DEMO-0450",
   "name": "Demo Name",
   "phone": "973111",
   "email": "",
   "moveType": "Home shift",
   "from": "Demo From",
   "to": "Demo To",
   "date": "",
   "notes": "",
   "status": "new",
   "createdAt": "+973 3935 0330",
   "received": true
  },
  {
   "id": "DEMO-0451",
   "name": "Demo Name",
   "phone": "9735",
   "email": "",
   "moveType": "Home shift",
   "from": "",
   "to": "",
   "date": "",
   "notes": "",
   "status": "new",
   "createdAt": "+973 3935 0330"
  },
  {
   "id": "DEMO-0452",
   "name": "Demo Name",
   "phone": "+973 3935 0330",
   "email": "demo@redsuntransport.bh",
   "moveType": "Villa relocation",
   "from": "Demo From",
   "to": "Demo To",
   "date": "+973 3935 0330",
   "notes": "Demo reference entry",
   "status": "new",
   "createdAt": "+973 3935 0330"
  }
 ],
 "/api/moving": {
  "jobs": [
   {
    "id": "DEMO-0453",
    "number": "DEMO-0454",
    "status": "open",
    "stage": "inquiry",
    "stageStatus": {},
    "stages": [
     {
      "stage": "inquiry",
      "at": "+973 3935 0330",
      "by": "office"
     }
    ],
    "quoteId": "q-a31262e8",
    "customer": {
     "name": "Demo Name",
     "phone": "973111",
     "email": ""
    },
    "move": {
     "from": {
      "address": "Demo Address",
      "floor": 0,
      "rooms": 0,
      "access": ""
     },
     "to": {
      "address": "Demo Address",
      "floor": 0,
      "rooms": 0,
      "access": ""
     }
    },
    "moveDate": "+973 3935 0330",
    "window": "08:00 – 12:00",
    "items": [],
    "estimate": {
     "truckSize": "Van",
     "workers": 3,
     "boxes": 0,
     "estHours": 3.5,
     "fare": 114.13,
     "m3": 0,
     "rooms": 1,
     "carpenter": false,
     "fragileUnits": 0,
     "breakdown": [
      {
       "label": "Demo vehicle",
       "bhd": 25
      },
      {
       "label": "Demo vehicle",
       "bhd": 0
      },
      {
       "label": "Demo vehicle",
       "bhd": 63
      },
      {
       "label": "Demo vehicle",
       "bhd": 0
      },
      {
       "label": "Demo vehicle",
       "bhd": 0
      },
      {
       "label": "Demo vehicle",
       "bhd": 15.75
      }
     ]
    },
    "team": {
     "vehicleId": null,
     "driverId": null,
     "packers": 0,
     "carpenter": false
    },
    "notes": [],
    "createdAt": "+973 3935 0330",
    "vehicle": null,
    "driver": null
   },
   {
    "id": "DEMO-0455",
    "number": "DEMO-0456",
    "status": "open",
    "stage": "quotation",
    "stageStatus": {
     "survey": "done"
    },
    "stages": [
     {
      "stage": "inquiry",
      "at": "+973 3935 0330",
      "by": "office"
     },
     {
      "stage": "survey",
      "at": "+973 3935 0330",
      "by": "office"
     },
     {
      "stage": "quotation",
      "at": "+973 3935 0330",
      "by": "office"
     }
    ],
    "quoteId": null,
    "customer": {
     "name": "Demo Name",
     "phone": "+973 3935 0330",
     "email": "demo@redsuntransport.bh"
    },
    "move": {
     "from": {
      "address": "Demo Address",
      "floor": 7,
      "rooms": 2,
      "elevator": true,
      "access": "Loading bay 2"
     },
     "to": {
      "address": "Demo Address",
      "floor": 2,
      "rooms": 4,
      "elevator": false,
      "access": "Street parking"
     }
    },
    "moveDate": "+973 3935 0330",
    "window": "08:00 – 12:00",
    "items": [
     {
      "id": "DEMO-0457",
      "name": "Demo Name",
      "qty": 1,
      "room": "Living Room",
      "fragile": false
     },
     {
      "id": "DEMO-0458",
      "name": "Demo Name",
      "qty": 2,
      "room": "Bedroom",
      "fragile": false
     },
     {
      "id": "DEMO-0459",
      "name": "Demo Name",
      "qty": 1,
      "room": "Bedroom",
      "fragile": false
     },
     {
      "id": "DEMO-0460",
      "name": "Demo Name",
      "qty": 2,
      "room": "Living Room",
      "fragile": true
     },
     {
      "id": "DEMO-0461",
      "name": "Demo Name",
      "qty": 18,
      "room": "Various",
      "fragile": false
     }
    ],
    "team": {
     "vehicleId": null,
     "driverId": null,
     "packers": 0,
     "carpenter": false
    },
    "notes": [],
    "createdAt": "+973 3935 0330",
    "estimate": {
     "truckSize": "1-ton",
     "workers": 5,
     "boxes": 41,
     "estHours": 6.5,
     "fare": 353.49,
     "m3": 5.9,
     "rooms": 3,
     "carpenter": true,
     "fragileUnits": 2,
     "breakdown": [
      {
       "label": "Demo vehicle",
       "bhd": 25
      },
      {
       "label": "Demo vehicle",
       "bhd": 23.6
      },
      {
       "label": "Demo vehicle",
       "bhd": 195
      },
      {
       "label": "Demo vehicle",
       "bhd": 4
      },
      {
       "label": "Demo vehicle",
       "bhd": 25
      },
      {
       "label": "Demo vehicle",
       "bhd": 48.75
      }
     ]
    },
    "vehicle": null,
    "driver": null
   },
   {
    "id": "DEMO-0462",
    "number": "DEMO-0463",
    "status": "open",
    "stage": "packing",
    "stageStatus": {
     "survey": "done",
     "quotation": "accepted",
     "booking": "confirmed",
     "packing": "in-progress"
    },
    "stages": [
     {
      "stage": "inquiry",
      "at": "+973 3935 0330",
      "by": "office"
     },
     {
      "stage": "survey",
      "at": "+973 3935 0330",
      "by": "office"
     },
     {
      "stage": "quotation",
      "at": "+973 3935 0330",
      "by": "office"
     },
     {
      "stage": "booking",
      "at": "+973 3935 0330",
      "by": "office"
     },
     {
      "stage": "packing",
      "at": "+973 3935 0330",
      "by": "office"
     }
    ],
    "quoteId": null,
    "customer": {
     "name": "Demo Name",
     "phone": "+973 3935 0330",
     "email": "demo@redsuntransport.bh"
    },
    "move": {
     "from": {
      "address": "Demo Address",
      "floor": 3,
      "rooms": 1,
      "elevator": true,
      "access": ""
     },
     "to": {
      "address": "Demo Address",
      "floor": 1,
      "rooms": 2,
      "elevator": true,
      "access": ""
     }
    },
    "moveDate": "+973 3935 0330",
    "window": "09:00 – 15:00",
    "items": [
     {
      "id": "DEMO-0464",
      "name": "Demo Name",
      "qty": 1,
      "room": "Kitchen",
      "fragile": false
     },
     {
      "id": "DEMO-0465",
      "name": "Demo Name",
      "qty": 1,
      "room": "Dining",
      "fragile": false
     },
     {
      "id": "DEMO-0466",
      "name": "Demo Name",
      "qty": 4,
      "room": "Office",
      "fragile": true
     },
     {
      "id": "DEMO-0467",
      "name": "Demo Name",
      "qty": 25,
      "room": "Various",
      "fragile": false
     }
    ],
    "team": {
     "vehicleId": "veh-003",
     "driverId": "drv-003",
     "packers": 3,
     "carpenter": false
    },
    "notes": [],
    "createdAt": "+973 3935 0330",
    "estimate": {
     "truckSize": "1-ton",
     "workers": 3,
     "boxes": 52,
     "estHours": 5.3,
     "fare": 184.42,
     "m3": 4.6,
     "rooms": 2,
     "carpenter": false,
     "fragileUnits": 0,
     "breakdown": [
      {
       "label": "Demo vehicle",
       "bhd": 25
      },
      {
       "label": "Demo vehicle",
       "bhd": 18.4
      },
      {
       "label": "Demo vehicle",
       "bhd": 95.4
      },
      {
       "label": "Demo vehicle",
       "bhd": 0
      },
      {
       "label": "Demo vehicle",
       "bhd": 5
      },
      {
       "label": "Demo vehicle",
       "bhd": 23.85
      }
     ]
    },
    "vehicle": {
     "id": "DEMO-0468",
     "plate": "DEMO-0469",
     "name": "Demo Name",
     "type": "Cargo Van",
     "make": "Mercedes-Benz",
     "model": "Sprinter 316",
     "year": 2023,
     "capacity": "1.8 tons",
     "status": "active",
     "fuelLevel": 92,
     "odometer": 31880,
     "gps": {
      "lat": 26.2361,
      "lng": 50.536,
      "location": "Demo Location"
     },
     "assignedDriverId": "drv-003",
     "insuranceExpiry": "+973 3935 0330",
     "registrationExpiry": "+973 3935 0330",
     "lastService": "+973 3935 0330",
     "nextServiceDue": "+973 3935 0330",
     "notes": "Demo reference entry",
     "driver": {
      "id": "DEMO-0470",
      "name": "Demo Name",
      "phone": "+973 3935 0330",
      "licenseNo": "DEMO-0471",
      "licenseClass": "Light Commercial",
      "licenseExpiry": "+973 3935 0330",
      "status": "on-duty",
      "assignedVehicleId": "veh-003",
      "rating": 5,
      "tripsCompleted": 198,
      "hoursThisWeek": 32,
      "cpr": "+973 3935 0330",
      "joinDate": "+973 3935 0330",
      "emergencyContact": "+973 3935 0330"
     },
     "insuranceDays": 180,
     "registrationDays": 300,
     "serviceDays": 48,
     "home": {
      "lat": 26.2361,
      "lng": 50.536,
      "location": "Demo Location"
     }
    },
    "driver": {
     "id": "DEMO-0472",
     "name": "Demo Name",
     "phone": "+973 3935 0330",
     "licenseNo": "DEMO-0473",
     "licenseClass": "Light Commercial",
     "licenseExpiry": "+973 3935 0330",
     "status": "on-duty",
     "assignedVehicleId": "veh-003",
     "rating": 5,
     "tripsCompleted": 198,
     "hoursThisWeek": 32,
     "cpr": "+973 3935 0330",
     "joinDate": "+973 3935 0330",
     "emergencyContact": "+973 3935 0330",
     "vehicle": {
      "id": "DEMO-0474",
      "plate": "DEMO-0475",
      "name": "Demo Name",
      "type": "Cargo Van",
      "make": "Mercedes-Benz",
      "model": "Sprinter 316",
      "year": 2023,
      "capacity": "1.8 tons",
      "status": "active",
      "fuelLevel": 92,
      "odometer": 31880,
      "gps": {
       "lat": 26.2361,
       "lng": 50.536,
       "location": "Demo Location"
      },
      "assignedDriverId": "drv-003",
      "insuranceExpiry": "+973 3935 0330",
      "registrationExpiry": "+973 3935 0330",
      "lastService": "+973 3935 0330",
      "nextServiceDue": "+973 3935 0330",
      "notes": "Demo reference entry"
     },
     "licenseDays": 200
    }
   }
  ],
  "stageCounts": {
   "inquiry": 1,
   "survey": 0,
   "quotation": 1,
   "booking": 0,
   "packing": 1,
   "pickup": 0,
   "loading": 0,
   "transit": 0,
   "delivery": 0,
   "unloading": 0,
   "completed": 0
  }
 },
 "/api/invoices": {
  "invoices": [
   {
    "id": "DEMO-0476",
    "number": "+973 3935 0330",
    "source": {
     "kind": "move",
     "id": "DEMO-0477"
    },
    "customer": {
     "name": "Demo Name",
     "phone": "+973 3935 0330",
     "email": "demo@redsuntransport.bh"
    },
    "items": [
     {
      "desc": "Movers & Packers — MV-2401 (Apartment 702, Marina Tower, Juffair → Villa 14, Riffa Views)",
      "qty": 1,
      "unit": "job",
      "price": 353.49,
      "amount": 353.49
     },
     {
      "desc": "Sofa (Living Room)",
      "qty": 1,
      "unit": "pc",
      "price": 0,
      "amount": 0
     },
     {
      "desc": "Bed (Bedroom)",
      "qty": 2,
      "unit": "pc",
      "price": 0,
      "amount": 0
     },
     {
      "desc": "Wardrobe (Bedroom)",
      "qty": 1,
      "unit": "pc",
      "price": 0,
      "amount": 0
     },
     {
      "desc": "TV (Living Room) — fragile",
      "qty": 2,
      "unit": "pc",
      "price": 0,
      "amount": 0
     },
     {
      "desc": "Boxes (Various)",
      "qty": 18,
      "unit": "pc",
      "price": 0,
      "amount": 0
     }
    ],
    "subtotal": 353.49,
    "vatBhd": 35.35,
    "vatPct": 10,
    "total": 388.84,
    "status": "draft",
    "issuedAt": null,
    "dueAt": null,
    "paidAt": null,
    "method": "",
    "notes": "+973 3935 0330",
    "createdAt": "+973 3935 0330",
    "linked": {
     "id": "DEMO-0478",
     "number": "DEMO-0479",
     "status": "open",
     "stage": "quotation",
     "stageStatus": {
      "survey": "done"
     },
     "stages": [
      {
       "stage": "inquiry",
       "at": "+973 3935 0330",
       "by": "office"
      },
      {
       "stage": "survey",
       "at": "+973 3935 0330",
       "by": "office"
      },
      {
       "stage": "quotation",
       "at": "+973 3935 0330",
       "by": "office"
      }
     ],
     "quoteId": null,
     "customer": {
      "name": "Demo Name",
      "phone": "+973 3935 0330",
      "email": "demo@redsuntransport.bh"
     },
     "move": {
      "from": {
       "address": "Demo Address",
       "floor": 7,
       "rooms": 2,
       "elevator": true,
       "access": "Loading bay 2"
      },
      "to": {
       "address": "Demo Address",
       "floor": 2,
       "rooms": 4,
       "elevator": false,
       "access": "Street parking"
      }
     },
     "moveDate": "+973 3935 0330",
     "window": "08:00 – 12:00",
     "items": [
      {
       "id": "DEMO-0480",
       "name": "Demo Name",
       "qty": 1,
       "room": "Living Room",
       "fragile": false
      },
      {
       "id": "DEMO-0481",
       "name": "Demo Name",
       "qty": 2,
       "room": "Bedroom",
       "fragile": false
      },
      {
       "id": "DEMO-0482",
       "name": "Demo Name",
       "qty": 1,
       "room": "Bedroom",
       "fragile": false
      },
      {
       "id": "DEMO-0483",
       "name": "Demo Name",
       "qty": 2,
       "room": "Living Room",
       "fragile": true
      },
      {
       "id": "DEMO-0484",
       "name": "Demo Name",
       "qty": 18,
       "room": "Various",
       "fragile": false
      }
     ],
     "team": {
      "vehicleId": null,
      "driverId": null,
      "packers": 0,
      "carpenter": false
     },
     "notes": [],
     "createdAt": "+973 3935 0330",
     "estimate": {
      "truckSize": "1-ton",
      "workers": 5,
      "boxes": 41,
      "estHours": 6.5,
      "fare": 353.49,
      "m3": 5.9,
      "rooms": 3,
      "carpenter": true,
      "fragileUnits": 2,
      "breakdown": [
       {
        "label": "Demo vehicle",
        "bhd": 25
       },
       {
        "label": "Demo vehicle",
        "bhd": 23.6
       },
       {
        "label": "Demo vehicle",
        "bhd": 195
       },
       {
        "label": "Demo vehicle",
        "bhd": 4
       },
       {
        "label": "Demo vehicle",
        "bhd": 25
       },
       {
        "label": "Demo vehicle",
        "bhd": 48.75
       }
      ]
     }
    }
   },
   {
    "id": "DEMO-0485",
    "number": "+973 3935 0330",
    "source": {
     "kind": "trip",
     "id": "DEMO-0486"
    },
    "customer": {
     "name": "Demo Name",
     "phone": "",
     "email": ""
    },
    "items": [
     {
      "desc": "Movers & Packers — Workstations and server racks",
      "qty": 1,
      "unit": "job",
      "price": 320,
      "amount": 320
     }
    ],
    "subtotal": 320,
    "vatBhd": 32,
    "vatPct": 10,
    "total": 352,
    "status": "issued",
    "issuedAt": "+973 3935 0330",
    "dueAt": "+973 3935 0330",
    "paidAt": null,
    "method": "",
    "notes": "Demo reference entry",
    "createdAt": "+973 3935 0330",
    "linked": {
     "id": "DEMO-0487",
     "code": "DEMO-0488",
     "type": "Commercial",
     "customer": "Demo Customer",
     "origin": "Demo Origin",
     "destination": "Demo Destination",
     "vehicleId": "veh-002",
     "driverId": "drv-002",
     "status": "completed",
     "scheduledAt": "+973 3935 0330",
     "startedAt": "+973 3935 0330",
     "eta": "+973 3935 0330",
     "distanceKm": 9,
     "fare": 320,
     "cargo": "Workstations and server racks",
     "vehicle": {
      "id": "DEMO-0489",
      "plate": "DEMO-0490",
      "name": "Demo Name",
      "type": "Flatbed",
      "make": "Hino",
      "model": "500 Series",
      "year": 2021,
      "capacity": "12 tons",
      "status": "on-trip",
      "fuelLevel": 41,
      "odometer": 126440,
      "gps": {
       "lat": 26.2285,
       "lng": 50.586,
       "location": "Demo Location"
      },
      "assignedDriverId": "drv-002",
      "insuranceExpiry": "+973 3935 0330",
      "registrationExpiry": "+973 3935 0330",
      "lastService": "+973 3935 0330",
      "nextServiceDue": "+973 3935 0330",
      "notes": "Demo reference entry"
     },
     "driver": {
      "id": "DEMO-0491",
      "name": "Demo Name",
      "phone": "+973 3935 0330",
      "licenseNo": "DEMO-0492",
      "licenseClass": "Heavy Articulated",
      "licenseExpiry": "+973 3935 0330",
      "status": "on-duty",
      "assignedVehicleId": "veh-002",
      "rating": 4.8,
      "tripsCompleted": 538,
      "hoursThisWeek": 41,
      "cpr": "+973 3935 0330",
      "joinDate": "+973 3935 0330",
      "emergencyContact": "+973 3935 0330"
     },
     "live": null,
     "completedAt": "+973 3935 0330",
     "stage": "completed",
     "stages": [
      {
       "stage": "pickup",
       "at": "+973 3935 0330",
       "by": "office"
      },
      {
       "stage": "loading",
       "at": "+973 3935 0330",
       "by": "office"
      },
      {
       "stage": "transit",
       "at": "+973 3935 0330",
       "by": "office"
      },
      {
       "stage": "delivery",
       "at": "+973 3935 0330",
       "by": "office"
      },
      {
       "stage": "completed",
       "at": "+973 3935 0330",
       "by": "office"
      }
     ]
    }
   },
   {
    "id": "DEMO-0493",
    "number": "+973 3935 0330",
    "source": {
     "kind": "trip",
     "id": "DEMO-0494"
    },
    "customer": {
     "name": "Demo Name",
     "phone": "+973 3935 0330",
     "email": ""
    },
    "items": [
     {
      "desc": "International cargo haul — King Fahd Causeway",
      "qty": 1,
      "unit": "load",
      "price": 340,
      "amount": 340
     }
    ],
    "subtotal": 340,
    "vatBhd": 34,
    "vatPct": 10,
    "total": 374,
    "status": "paid",
    "issuedAt": "+973 3935 0330",
    "dueAt": "+973 3935 0330",
    "paidAt": "+973 3935 0330",
    "method": "Cash",
    "notes": "",
    "createdAt": "+973 3935 0330",
    "linked": {
     "id": "DEMO-0495",
     "code": "DEMO-0496",
     "type": "International",
     "customer": "Demo Customer",
     "origin": "Demo Origin",
     "destination": "Demo Destination",
     "vehicleId": "veh-007",
     "driverId": "drv-004",
     "status": "in-progress",
     "scheduledAt": "+973 3935 0330",
     "startedAt": "+973 3935 0330",
     "eta": "+973 3935 0330",
     "distanceKm": 42,
     "fare": 640,
     "cargo": "Chilled F&B consignment",
     "vehicle": {
      "id": "DEMO-0497",
      "plate": "DEMO-0498",
      "name": "Demo Name",
      "type": "Reefer",
      "make": "Mitsubishi",
      "model": "Fuso Canter",
      "year": 2022,
      "capacity": "3.5 tons",
      "status": "on-trip",
      "fuelLevel": 37,
      "odometer": 67210,
      "gps": {
       "lat": 26.142,
       "lng": 50.65,
       "location": "Demo Location"
      },
      "assignedDriverId": "drv-004",
      "insuranceExpiry": "+973 3935 0330",
      "registrationExpiry": "+973 3935 0330",
      "lastService": "+973 3935 0330",
      "nextServiceDue": "+973 3935 0330",
      "notes": "Demo reference entry"
     },
     "driver": {
      "id": "DEMO-0499",
      "name": "Demo Name",
      "phone": "+973 3935 0330",
      "licenseNo": "DEMO-0500",
      "licenseClass": "Heavy",
      "licenseExpiry": "+973 3935 0330",
      "status": "on-duty",
      "assignedVehicleId": "veh-007",
      "rating": 4.7,
      "tripsCompleted": 301,
      "hoursThisWeek": 44,
      "cpr": "+973 3935 0330",
      "joinDate": "+973 3935 0330",
      "emergencyContact": "+973 3935 0330"
     },
     "stage": "delivery"
    }
   },
   {
    "id": "DEMO-0501",
    "number": "+973 3935 0330",
    "source": {
     "kind": "trip",
     "id": "DEMO-0502"
    },
    "customer": {
     "name": "Demo Name",
     "phone": "+973 3935 0330",
     "email": ""
    },
    "items": [
     {
      "desc": "4BR villa furniture + carpentry — Amwaj to Riffa Views",
      "qty": 1,
      "unit": "move",
      "price": 185,
      "amount": 185
     }
    ],
    "subtotal": 185,
    "vatBhd": 18.5,
    "vatPct": 10,
    "total": 203.5,
    "status": "issued",
    "issuedAt": "+973 3935 0330",
    "dueAt": "+973 3935 0330",
    "paidAt": null,
    "method": "",
    "notes": "",
    "createdAt": "+973 3935 0330",
    "linked": {
     "id": "DEMO-0503",
     "code": "DEMO-0504",
     "type": "Residential",
     "customer": "Demo Customer",
     "origin": "Demo Origin",
     "destination": "Demo Destination",
     "vehicleId": "veh-001",
     "driverId": "drv-001",
     "status": "in-progress",
     "scheduledAt": "+973 3935 0330",
     "startedAt": "+973 3935 0330",
     "eta": "+973 3935 0330",
     "distanceKm": 28,
     "fare": 185,
     "cargo": "4BR villa furniture + carpentry",
     "vehicle": {
      "id": "DEMO-0505",
      "plate": "DEMO-0506",
      "name": "Demo Name",
      "type": "Box Truck",
      "make": "Isuzu",
      "model": "NPR 75",
      "year": 2022,
      "capacity": "5.5 tons",
      "status": "active",
      "fuelLevel": 78,
      "odometer": 84210,
      "gps": {
       "lat": 26.2075,
       "lng": 50.5906,
       "location": "Demo Location"
      },
      "assignedDriverId": "drv-001",
      "insuranceExpiry": "+973 3935 0330",
      "registrationExpiry": "+973 3935 0330",
      "lastService": "+973 3935 0330",
      "nextServiceDue": "+973 3935 0330",
      "notes": "Demo reference entry"
     },
     "driver": {
      "id": "DEMO-0507",
      "name": "Demo Name",
      "phone": "+973 3935 0330",
      "licenseNo": "DEMO-0508",
      "licenseClass": "Heavy",
      "licenseExpiry": "+973 3935 0330",
      "status": "on-duty",
      "assignedVehicleId": "veh-001",
      "rating": 4.9,
      "tripsCompleted": 412,
      "hoursThisWeek": 38,
      "cpr": "+973 3935 0330",
      "joinDate": "+973 3935 0330",
      "emergencyContact": "+973 3935 0330"
     },
     "live": null,
     "dest": null,
     "distanceTravelled": 12.053043054654875
    }
   }
  ],
  "statusCounts": {
   "draft": 1,
   "issued": 2,
   "paid": 1
  },
  "outstandingBhd": 555.5
 },
 "/api/documents": {
  "documents": [
   {
    "id": "DEMO-0509",
    "kind": "registration",
    "title": "Demo Title",
    "file": null,
    "extracted": {
     "kind": "registration",
     "plate": "DEMO-0510",
     "owner": "Red Sun WLL",
     "expiryDate": "+973 3935 0330",
     "confidence": 0.8,
     "vehicle": "Hino 500"
    },
    "source": "rule",
    "linked": {
     "kind": "vehicle",
     "id": "DEMO-0511"
    },
    "expiry": {
     "date": "+973 3935 0330",
     "bucket": "expired"
    },
    "finances": {
     "amount": null,
     "liters": null,
     "vendor": "",
     "invoiceNo": ""
    },
    "flags": {},
    "flows": [
     {
      "label": "Demo vehicle",
      "at": "+973 3935 0330",
      "actor": "system",
      "message": "Demo reference entry"
     },
     {
      "label": "Demo vehicle",
      "at": "+973 3935 0330",
      "actor": "office",
      "message": "+973 3935 0330"
     }
    ],
    "notes": "Demo reference entry",
    "createdAt": "+973 3935 0330",
    "daysLeft": -6,
    "bucket": "expired",
    "linkedRecord": {
     "plate": "DEMO-0512",
     "name": "Demo Name",
     "model": "Hino 500 Series"
    }
   },
   {
    "id": "DEMO-0513",
    "kind": "insurance",
    "title": "Demo Title",
    "file": null,
    "extracted": {
     "kind": "insurance",
     "plate": "DEMO-0514",
     "owner": "",
     "expiryDate": "+973 3935 0330",
     "confidence": 0.8,
     "vehicle": "Hino 500",
     "amount": 220
    },
    "source": "rule",
    "linked": {
     "kind": "vehicle",
     "id": "DEMO-0515"
    },
    "expiry": {
     "date": "+973 3935 0330",
     "bucket": "exp30"
    },
    "finances": {
     "amount": 220,
     "liters": null,
     "vendor": "",
     "invoiceNo": ""
    },
    "flags": {},
    "flows": [
     {
      "label": "Demo vehicle",
      "at": "+973 3935 0330",
      "actor": "system",
      "message": "Demo reference entry"
     }
    ],
    "notes": "Demo reference entry",
    "createdAt": "+973 3935 0330",
    "daysLeft": 13,
    "bucket": "exp30",
    "linkedRecord": {
     "plate": "DEMO-0516",
     "name": "Demo Name",
     "model": "Hino 500 Series"
    }
   },
   {
    "id": "DEMO-0517",
    "kind": "license",
    "title": "Demo Title",
    "file": null,
    "extracted": {
     "kind": "license",
     "plate": "",
     "owner": "",
     "expiryDate": "+973 3935 0330",
     "confidence": 0.8,
     "licenseNo": "DEMO-0518",
     "driverName": "Hassan Al-Khalifa"
    },
    "source": "rule",
    "linked": {
     "kind": "driver",
     "id": "DEMO-0519"
    },
    "expiry": {
     "date": "+973 3935 0330",
     "bucket": "exp90"
    },
    "finances": {
     "amount": null,
     "liters": null,
     "vendor": "",
     "invoiceNo": ""
    },
    "flags": {},
    "flows": [],
    "notes": "Demo reference entry",
    "createdAt": "+973 3935 0330",
    "daysLeft": 59,
    "bucket": "exp90",
    "linkedRecord": {
     "name": "Demo Name",
     "phone": "+973 3935 0330"
    }
   },
   {
    "id": "DEMO-0520",
    "kind": "fuelReceipt",
    "title": "Demo Title",
    "file": null,
    "extracted": {
     "kind": "fuelReceipt",
     "plate": "DEMO-0521",
     "owner": "",
     "expiryDate": "+973 3935 0330",
     "confidence": 0.8,
     "amount": 26,
     "liters": 65,
     "vendor": "Bapco Umm Al Hassam"
    },
    "source": "rule",
    "linked": {
     "kind": "vehicle",
     "id": "DEMO-0522"
    },
    "expiry": {
     "date": "+973 3935 0330",
     "bucket": "exp90"
    },
    "finances": {
     "amount": 26,
     "liters": 65,
     "vendor": "Bapco Umm Al Hassam",
     "invoiceNo": ""
    },
    "flags": {},
    "flows": [
     {
      "label": "Demo vehicle",
      "at": "+973 3935 0330",
      "actor": "system",
      "message": "Demo reference entry"
     }
    ],
    "notes": "Demo reference entry",
    "createdAt": "+973 3935 0330",
    "daysLeft": 89,
    "bucket": "exp90",
    "linkedRecord": {
     "plate": "DEMO-0523",
     "name": "Demo Name",
     "model": "Hino 500 Series"
    }
   },
   {
    "id": "DEMO-0524",
    "kind": "maintenanceInvoice",
    "title": "Demo Title",
    "file": null,
    "extracted": {
     "kind": "maintenanceInvoice",
     "plate": "DEMO-0525",
     "owner": "",
     "expiryDate": "+973 3935 0330",
     "confidence": 0.8,
     "amount": 340,
     "vendor": "Sitra Workshop"
    },
    "source": "rule",
    "linked": {
     "kind": "vehicle",
     "id": "DEMO-0526"
    },
    "expiry": {
     "date": "+973 3935 0330",
     "bucket": "ok"
    },
    "finances": {
     "amount": 340,
     "liters": null,
     "vendor": "Sitra Workshop",
     "invoiceNo": ""
    },
    "flags": {},
    "flows": [
     {
      "label": "Demo vehicle",
      "at": "+973 3935 0330",
      "actor": "system",
      "message": "Demo reference entry"
     }
    ],
    "notes": "Demo reference entry",
    "createdAt": "+973 3935 0330",
    "daysLeft": 119,
    "bucket": "ok",
    "linkedRecord": {
     "plate": "DEMO-0527",
     "name": "Demo Name",
     "model": "Hino 500 Series"
    }
   },
   {
    "id": "DEMO-0528",
    "kind": "registration",
    "title": "Demo Title",
    "file": null,
    "extracted": {
     "kind": "registration",
     "plate": "DEMO-0529",
     "owner": "Red Sun WLL",
     "expiryDate": "+973 3935 0330",
     "confidence": 0.8,
     "vehicle": "Hino 500"
    },
    "source": "rule",
    "linked": {
     "kind": "vehicle",
     "id": "DEMO-0530"
    },
    "expiry": {
     "date": "+973 3935 0330",
     "bucket": "expired"
    },
    "finances": {
     "amount": 120,
     "liters": null,
     "vendor": "Workshop A",
     "invoiceNo": ""
    },
    "flags": {},
    "flows": [
     {
      "label": "Demo vehicle",
      "at": "+973 3935 0330",
      "actor": "system",
      "message": "Demo reference entry"
     },
     {
      "label": "Demo vehicle",
      "at": "+973 3935 0330",
      "actor": "office",
      "message": "Demo reference entry"
     }
    ],
    "notes": "Demo reference entry",
    "createdAt": "+973 3935 0330",
    "daysLeft": 171,
    "bucket": "ok",
    "linkedRecord": {
     "plate": "DEMO-0531",
     "name": "Demo Name",
     "model": "Hino 500 Series"
    }
   },
   {
    "id": "DEMO-0532",
    "kind": "registration",
    "title": "Demo Title",
    "file": null,
    "extracted": {
     "kind": "registration",
     "plate": "DEMO-0533",
     "vehicle": "Hino 500 Series",
     "owner": "Red Sun WLL",
     "expiryDate": "+973 3935 0330",
     "licenseNo": "",
     "cpr": "",
     "driverName": "",
     "vendor": "",
     "amount": null,
     "liters": null,
     "invoiceNo": "",
     "hours": null,
     "odometer": null,
     "note": "",
     "confidence": 0.76
    },
    "source": "rule",
    "linked": {
     "kind": "vehicle",
     "id": "DEMO-0534"
    },
    "expiry": {
     "date": "+973 3935 0330",
     "bucket": "ok"
    },
    "finances": {
     "amount": 120,
     "liters": null,
     "vendor": "Workshop A",
     "invoiceNo": ""
    },
    "flags": {},
    "flows": [
     {
      "label": "Demo vehicle",
      "at": "+973 3935 0330",
      "actor": "office",
      "message": "Demo reference entry"
     },
     {
      "label": "Demo vehicle",
      "at": "+973 3935 0330",
      "actor": "office",
      "message": "Demo reference entry"
     }
    ],
    "notes": "",
    "createdAt": "+973 3935 0330",
    "daysLeft": 171,
    "bucket": "ok",
    "linkedRecord": {
     "plate": "DEMO-0535",
     "name": "Demo Name",
     "model": "Hino 500 Series"
    }
   },
   {
    "id": "DEMO-0536",
    "kind": "license",
    "title": "Demo Title",
    "file": null,
    "extracted": {
     "kind": "license",
     "plate": "",
     "vehicle": "",
     "owner": "",
     "expiryDate": "+973 3935 0330",
     "licenseNo": "DEMO-0537",
     "cpr": "",
     "driverName": "Hassan Al",
     "vendor": "",
     "amount": null,
     "liters": null,
     "invoiceNo": "",
     "hours": null,
     "odometer": null,
     "note": "",
     "confidence": 0.76
    },
    "source": "rule",
    "linked": {
     "kind": "driver",
     "id": "DEMO-0538"
    },
    "expiry": {
     "date": "+973 3935 0330",
     "bucket": "ok"
    },
    "finances": {
     "amount": null,
     "liters": null,
     "vendor": "",
     "invoiceNo": ""
    },
    "flags": {},
    "flows": [
     {
      "label": "Demo vehicle",
      "at": "+973 3935 0330",
      "actor": "office",
      "message": "Demo reference entry"
     },
     {
      "label": "Demo vehicle",
      "at": "+973 3935 0330",
      "actor": "office",
      "message": "+973 3935 0330"
     }
    ],
    "notes": "",
    "createdAt": "+973 3935 0330",
    "daysLeft": 251,
    "bucket": "ok",
    "linkedRecord": {
     "name": "Demo Name",
     "phone": "+973 3935 0330"
    }
   },
   {
    "id": "DEMO-0539",
    "kind": "maintenanceInvoice",
    "title": "Demo Title",
    "file": null,
    "extracted": {
     "kind": "maintenanceInvoice",
     "plate": "DEMO-0540",
     "vehicle": "",
     "owner": "",
     "expiryDate": "",
     "licenseNo": "",
     "cpr": "",
     "driverName": "",
     "vendor": "sitra workshop",
     "amount": 340,
     "liters": null,
     "invoiceNo": "Invoice",
     "hours": null,
     "odometer": null,
     "note": "",
     "confidence": 0.76
    },
    "source": "rule",
    "linked": {
     "kind": "vehicle",
     "id": "DEMO-0541"
    },
    "expiry": {
     "date": null,
     "bucket": "n/a"
    },
    "finances": {
     "amount": 340,
     "liters": null,
     "vendor": "sitra workshop",
     "invoiceNo": "Invoice"
    },
    "flags": {},
    "flows": [
     {
      "label": "Demo vehicle",
      "at": "+973 3935 0330",
      "actor": "office",
      "message": "Demo reference entry"
     },
     {
      "label": "Demo vehicle",
      "at": "+973 3935 0330",
      "actor": "system",
      "message": "Demo reference entry"
     }
    ],
    "notes": "",
    "createdAt": "+973 3935 0330",
    "daysLeft": null,
    "bucket": "n/a",
    "linkedRecord": {
     "plate": "DEMO-0542",
     "name": "Demo Name",
     "model": "Hino 500 Series"
    }
   },
   {
    "id": "DEMO-0543",
    "kind": "fuelReceipt",
    "title": "Demo Title",
    "file": null,
    "extracted": {
     "kind": "fuelReceipt",
     "plate": "DEMO-0544",
     "vehicle": "",
     "owner": "",
     "expiryDate": "",
     "licenseNo": "",
     "cpr": "",
     "driverName": "",
     "vendor": "bapco umm al hassam station",
     "amount": 26,
     "liters": 65,
     "invoiceNo": "Total",
     "hours": null,
     "odometer": null,
     "note": "",
     "confidence": 0.76
    },
    "source": "rule",
    "linked": {
     "kind": "vehicle",
     "id": "DEMO-0545"
    },
    "expiry": {
     "date": null,
     "bucket": "n/a"
    },
    "finances": {
     "amount": null,
     "liters": null,
     "vendor": "",
     "invoiceNo": ""
    },
    "flags": {},
    "flows": [
     {
      "label": "Demo vehicle",
      "at": "+973 3935 0330",
      "actor": "office",
      "message": "Demo reference entry"
     },
     {
      "label": "Demo vehicle",
      "at": "+973 3935 0330",
      "actor": "system",
      "message": "Demo reference entry"
     }
    ],
    "notes": "",
    "createdAt": "+973 3935 0330",
    "daysLeft": null,
    "bucket": "n/a",
    "linkedRecord": {
     "plate": "DEMO-0546",
     "name": "Demo Name",
     "model": "Hino 500 Series"
    }
   }
  ],
  "counts": {
   "expired": 1,
   "exp30": 1,
   "exp90": 2,
   "ok": 4,
   "total": 10
  },
  "kinds": [
   "registration",
   "insurance",
   "license",
   "id",
   "invoice",
   "fuelReceipt",
   "maintenanceInvoice",
   "other"
  ]
 },
 "/api/expenses": {
  "expenses": [
   {
    "id": "DEMO-0547",
    "category": "leasing",
    "amount": 400,
    "vehicleId": "veh-004",
    "driverId": null,
    "date": "+973 3935 0330",
    "vendor": "Ithmaar Finance",
    "notes": "Demo reference entry",
    "recurring": true,
    "createdAt": "+973 3935 0330",
    "vehicle": {
     "id": "DEMO-0548",
     "plate": "DEMO-0549",
     "name": "Demo Name",
     "type": "Trailer",
     "make": "Volvo",
     "model": "FH16",
     "year": 2020,
     "capacity": "24 tons",
     "status": "maintenance",
     "fuelLevel": 22,
     "odometer": 214900,
     "gps": {
      "lat": 26.1702,
      "lng": 50.547,
      "location": "Demo Location"
     },
     "assignedDriverId": null,
     "insuranceExpiry": "+973 3935 0330",
     "registrationExpiry": "+973 3935 0330",
     "lastService": "+973 3935 0330",
     "nextServiceDue": "+973 3935 0330",
     "notes": "Demo reference entry",
     "driver": null,
     "insuranceDays": 12,
     "registrationDays": 55,
     "serviceDays": 28,
     "home": {
      "lat": 26.1702,
      "lng": 50.547,
      "location": "Demo Location"
     }
    },
    "categoryLabel": "leasing"
   },
   {
    "id": "DEMO-0550",
    "category": "financing",
    "amount": 250,
    "vehicleId": "veh-002",
    "driverId": null,
    "date": "+973 3935 0330",
    "vendor": "Bank of Bahrain",
    "notes": "Demo reference entry",
    "recurring": true,
    "createdAt": "+973 3935 0330",
    "vehicle": {
     "id": "DEMO-0551",
     "plate": "DEMO-0552",
     "name": "Demo Name",
     "type": "Flatbed",
     "make": "Hino",
     "model": "500 Series",
     "year": 2021,
     "capacity": "12 tons",
     "status": "on-trip",
     "fuelLevel": 41,
     "odometer": 126440,
     "gps": {
      "lat": 26.2286,
      "lng": 50.6017,
      "location": "Demo Location"
     },
     "assignedDriverId": "drv-002",
     "insuranceExpiry": "+973 3935 0330",
     "registrationExpiry": "+973 3935 0330",
     "lastService": "+973 3935 0330",
     "nextServiceDue": "+973 3935 0330",
     "notes": "Demo reference entry",
     "driver": {
      "id": "DEMO-0553",
      "name": "Demo Name",
      "phone": "+973 3935 0330",
      "licenseNo": "DEMO-0554",
      "licenseClass": "Heavy Articulated",
      "licenseExpiry": "+973 3935 0330",
      "status": "on-duty",
      "assignedVehicleId": "veh-002",
      "rating": 4.8,
      "tripsCompleted": 538,
      "hoursThisWeek": 41,
      "cpr": "+973 3935 0330",
      "joinDate": "+973 3935 0330",
      "emergencyContact": "+973 3935 0330"
     },
     "insuranceDays": 44,
     "registrationDays": 120,
     "serviceDays": 4,
     "home": null,
     "tripKm": 15.206018989723434,
     "idleMins": 0
    },
    "categoryLabel": "financing"
   },
   {
    "id": "DEMO-0555",
    "category": "leasing",
    "amount": 400,
    "vehicleId": "veh-004",
    "driverId": null,
    "date": "+973 3935 0330",
    "vendor": "Ithmaar Finance",
    "notes": "Demo reference entry",
    "recurring": true,
    "createdAt": "+973 3935 0330",
    "vehicle": {
     "id": "DEMO-0556",
     "plate": "DEMO-0557",
     "name": "Demo Name",
     "type": "Trailer",
     "make": "Volvo",
     "model": "FH16",
     "year": 2020,
     "capacity": "24 tons",
     "status": "maintenance",
     "fuelLevel": 22,
     "odometer": 214900,
     "gps": {
      "lat": 26.1702,
      "lng": 50.547,
      "location": "Demo Location"
     },
     "assignedDriverId": null,
     "insuranceExpiry": "+973 3935 0330",
     "registrationExpiry": "+973 3935 0330",
     "lastService": "+973 3935 0330",
     "nextServiceDue": "+973 3935 0330",
     "notes": "Demo reference entry",
     "driver": null,
     "insuranceDays": 12,
     "registrationDays": 55,
     "serviceDays": 28,
     "home": {
      "lat": 26.1702,
      "lng": 50.547,
      "location": "Demo Location"
     }
    },
    "categoryLabel": "leasing"
   },
   {
    "id": "DEMO-0558",
    "category": "financing",
    "amount": 250,
    "vehicleId": "veh-002",
    "driverId": null,
    "date": "+973 3935 0330",
    "vendor": "Bank of Bahrain",
    "notes": "Demo reference entry",
    "recurring": true,
    "createdAt": "+973 3935 0330",
    "vehicle": {
     "id": "DEMO-0559",
     "plate": "DEMO-0560",
     "name": "Demo Name",
     "type": "Flatbed",
     "make": "Hino",
     "model": "500 Series",
     "year": 2021,
     "capacity": "12 tons",
     "status": "on-trip",
     "fuelLevel": 41,
     "odometer": 126440,
     "gps": {
      "lat": 26.2286,
      "lng": 50.6017,
      "location": "Demo Location"
     },
     "assignedDriverId": "drv-002",
     "insuranceExpiry": "+973 3935 0330",
     "registrationExpiry": "+973 3935 0330",
     "lastService": "+973 3935 0330",
     "nextServiceDue": "+973 3935 0330",
     "notes": "Demo reference entry",
     "driver": {
      "id": "DEMO-0561",
      "name": "Demo Name",
      "phone": "+973 3935 0330",
      "licenseNo": "DEMO-0562",
      "licenseClass": "Heavy Articulated",
      "licenseExpiry": "+973 3935 0330",
      "status": "on-duty",
      "assignedVehicleId": "veh-002",
      "rating": 4.8,
      "tripsCompleted": 538,
      "hoursThisWeek": 41,
      "cpr": "+973 3935 0330",
      "joinDate": "+973 3935 0330",
      "emergencyContact": "+973 3935 0330"
     },
     "insuranceDays": 44,
     "registrationDays": 120,
     "serviceDays": 4,
     "home": null,
     "tripKm": 15.206018989723434,
     "idleMins": 0
    },
    "categoryLabel": "financing"
   },
   {
    "id": "DEMO-0563",
    "category": "tolls",
    "amount": 16,
    "vehicleId": "veh-001",
    "driverId": null,
    "date": "+973 3935 0330",
    "vendor": "GCC causeway",
    "notes": "Demo reference entry",
    "recurring": false,
    "createdAt": "+973 3935 0330",
    "vehicle": {
     "id": "DEMO-0564",
     "plate": "DEMO-0565",
     "name": "Demo Name",
     "type": "Box Truck",
     "make": "Isuzu",
     "model": "NPR 75",
     "year": 2022,
     "capacity": "5.5 tons",
     "status": "active",
     "fuelLevel": 78,
     "odometer": 84210,
     "gps": {
      "lat": 26.2,
      "lng": 50.5,
      "location": "Demo Location"
     },
     "assignedDriverId": "drv-001",
     "insuranceExpiry": "+973 3935 0330",
     "registrationExpiry": "+973 3935 0330",
     "lastService": "+973 3935 0330",
     "nextServiceDue": "+973 3935 0330",
     "notes": "Demo reference entry",
     "driver": {
      "id": "DEMO-0566",
      "name": "Demo Name",
      "phone": "+973 3935 0330",
      "licenseNo": "DEMO-0567",
      "licenseClass": "Heavy",
      "licenseExpiry": "+973 3935 0330",
      "status": "on-duty",
      "assignedVehicleId": "veh-001",
      "rating": 4.9,
      "tripsCompleted": 412,
      "hoursThisWeek": 38,
      "cpr": "+973 3935 0330",
      "joinDate": "+973 3935 0330",
      "emergencyContact": "+973 3935 0330"
     },
     "insuranceDays": 96,
     "registrationDays": 210,
     "serviceDays": 18,
     "home": {
      "lat": 26.2075,
      "lng": 50.5906,
      "location": "Demo Location"
     },
     "idleMins": 0,
     "tripKm": 12.053043054654875,
     "photo": null
    },
    "categoryLabel": "tolls"
   },
   {
    "id": "DEMO-0568",
    "category": "tolls",
    "amount": 16,
    "vehicleId": "veh-001",
    "driverId": null,
    "date": "+973 3935 0330",
    "vendor": "GCC causeway",
    "notes": "Demo reference entry",
    "recurring": false,
    "createdAt": "+973 3935 0330",
    "vehicle": {
     "id": "DEMO-0569",
     "plate": "DEMO-0570",
     "name": "Demo Name",
     "type": "Box Truck",
     "make": "Isuzu",
     "model": "NPR 75",
     "year": 2022,
     "capacity": "5.5 tons",
     "status": "active",
     "fuelLevel": 78,
     "odometer": 84210,
     "gps": {
      "lat": 26.2,
      "lng": 50.5,
      "location": "Demo Location"
     },
     "assignedDriverId": "drv-001",
     "insuranceExpiry": "+973 3935 0330",
     "registrationExpiry": "+973 3935 0330",
     "lastService": "+973 3935 0330",
     "nextServiceDue": "+973 3935 0330",
     "notes": "Demo reference entry",
     "driver": {
      "id": "DEMO-0571",
      "name": "Demo Name",
      "phone": "+973 3935 0330",
      "licenseNo": "DEMO-0572",
      "licenseClass": "Heavy",
      "licenseExpiry": "+973 3935 0330",
      "status": "on-duty",
      "assignedVehicleId": "veh-001",
      "rating": 4.9,
      "tripsCompleted": 412,
      "hoursThisWeek": 38,
      "cpr": "+973 3935 0330",
      "joinDate": "+973 3935 0330",
      "emergencyContact": "+973 3935 0330"
     },
     "insuranceDays": 96,
     "registrationDays": 210,
     "serviceDays": 18,
     "home": {
      "lat": 26.2075,
      "lng": 50.5906,
      "location": "Demo Location"
     },
     "idleMins": 0,
     "tripKm": 12.053043054654875,
     "photo": null
    },
    "categoryLabel": "tolls"
   },
   {
    "id": "DEMO-0573",
    "category": "insurance",
    "amount": 78,
    "vehicleId": "veh-005",
    "driverId": null,
    "date": "+973 3935 0330",
    "vendor": "NIC Bahrain",
    "notes": "Demo reference entry",
    "recurring": false,
    "createdAt": "+973 3935 0330",
    "vehicle": {
     "id": "DEMO-0574",
     "plate": "DEMO-0575",
     "name": "Demo Name",
     "type": "Bus",
     "make": "Yutong",
     "model": "ZK6122H",
     "year": 2019,
     "capacity": "45 seats",
     "status": "idle",
     "fuelLevel": 64,
     "odometer": 178220,
     "gps": {
      "lat": 26.2128,
      "lng": 50.6872,
      "location": "Demo Location"
     },
     "assignedDriverId": "drv-005",
     "insuranceExpiry": "+973 3935 0330",
     "registrationExpiry": "+973 3935 0330",
     "lastService": "+973 3935 0330",
     "nextServiceDue": "+973 3935 0330",
     "notes": "Demo reference entry",
     "driver": {
      "id": "DEMO-0576",
      "name": "Demo Name",
      "phone": "+973 3935 0330",
      "licenseNo": "DEMO-0577",
      "licenseClass": "Passenger Bus",
      "licenseExpiry": "+973 3935 0330",
      "status": "standby",
      "assignedVehicleId": "veh-005",
      "rating": 4.6,
      "tripsCompleted": 267,
      "hoursThisWeek": 18,
      "cpr": "+973 3935 0330",
      "joinDate": "+973 3935 0330",
      "emergencyContact": "+973 3935 0330"
     },
     "insuranceDays": 70,
     "registrationDays": 140,
     "serviceDays": 15,
     "home": {
      "lat": 26.2128,
      "lng": 50.6872,
      "location": "Demo Location"
     }
    },
    "categoryLabel": "insurance"
   },
   {
    "id": "DEMO-0578",
    "category": "insurance",
    "amount": 78,
    "vehicleId": "veh-005",
    "driverId": null,
    "date": "+973 3935 0330",
    "vendor": "NIC Bahrain",
    "notes": "Demo reference entry",
    "recurring": false,
    "createdAt": "+973 3935 0330",
    "vehicle": {
     "id": "DEMO-0579",
     "plate": "DEMO-0580",
     "name": "Demo Name",
     "type": "Bus",
     "make": "Yutong",
     "model": "ZK6122H",
     "year": 2019,
     "capacity": "45 seats",
     "status": "idle",
     "fuelLevel": 64,
     "odometer": 178220,
     "gps": {
      "lat": 26.2128,
      "lng": 50.6872,
      "location": "Demo Location"
     },
     "assignedDriverId": "drv-005",
     "insuranceExpiry": "+973 3935 0330",
     "registrationExpiry": "+973 3935 0330",
     "lastService": "+973 3935 0330",
     "nextServiceDue": "+973 3935 0330",
     "notes": "Demo reference entry",
     "driver": {
      "id": "DEMO-0581",
      "name": "Demo Name",
      "phone": "+973 3935 0330",
      "licenseNo": "DEMO-0582",
      "licenseClass": "Passenger Bus",
      "licenseExpiry": "+973 3935 0330",
      "status": "standby",
      "assignedVehicleId": "veh-005",
      "rating": 4.6,
      "tripsCompleted": 267,
      "hoursThisWeek": 18,
      "cpr": "+973 3935 0330",
      "joinDate": "+973 3935 0330",
      "emergencyContact": "+973 3935 0330"
     },
     "insuranceDays": 70,
     "registrationDays": 140,
     "serviceDays": 15,
     "home": {
      "lat": 26.2128,
      "lng": 50.6872,
      "location": "Demo Location"
     }
    },
    "categoryLabel": "insurance"
   },
   {
    "id": "DEMO-0583",
    "category": "tires",
    "amount": 155.5,
    "vehicleId": "veh-001",
    "driverId": null,
    "date": "+973 3935 0330",
    "vendor": "Tyres Plus",
    "notes": "Demo reference entry",
    "recurring": false,
    "createdAt": "+973 3935 0330",
    "vehicle": {
     "id": "DEMO-0584",
     "plate": "DEMO-0585",
     "name": "Demo Name",
     "type": "Box Truck",
     "make": "Isuzu",
     "model": "NPR 75",
     "year": 2022,
     "capacity": "5.5 tons",
     "status": "active",
     "fuelLevel": 78,
     "odometer": 84210,
     "gps": {
      "lat": 26.2,
      "lng": 50.5,
      "location": "Demo Location"
     },
     "assignedDriverId": "drv-001",
     "insuranceExpiry": "+973 3935 0330",
     "registrationExpiry": "+973 3935 0330",
     "lastService": "+973 3935 0330",
     "nextServiceDue": "+973 3935 0330",
     "notes": "Demo reference entry",
     "driver": {
      "id": "DEMO-0586",
      "name": "Demo Name",
      "phone": "+973 3935 0330",
      "licenseNo": "DEMO-0587",
      "licenseClass": "Heavy",
      "licenseExpiry": "+973 3935 0330",
      "status": "on-duty",
      "assignedVehicleId": "veh-001",
      "rating": 4.9,
      "tripsCompleted": 412,
      "hoursThisWeek": 38,
      "cpr": "+973 3935 0330",
      "joinDate": "+973 3935 0330",
      "emergencyContact": "+973 3935 0330"
     },
     "insuranceDays": 96,
     "registrationDays": 210,
     "serviceDays": 18,
     "home": {
      "lat": 26.2075,
      "lng": 50.5906,
      "location": "Demo Location"
     },
     "idleMins": 0,
     "tripKm": 12.053043054654875,
     "photo": null
    },
    "categoryLabel": "tires"
   },
   {
    "id": "DEMO-0588",
    "category": "parking",
    "amount": 25,
    "vehicleId": null,
    "driverId": null,
    "date": "+973 3935 0330",
    "vendor": "Seef Mall",
    "notes": "Demo reference entry",
    "recurring": false,
    "createdAt": "+973 3935 0330",
    "vehicle": null,
    "categoryLabel": "parking"
   },
   {
    "id": "DEMO-0589",
    "category": "parking",
    "amount": 25,
    "vehicleId": null,
    "driverId": null,
    "date": "+973 3935 0330",
    "vendor": "Seef Mall",
    "notes": "Demo reference entry",
    "recurring": false,
    "createdAt": "+973 3935 0330",
    "vehicle": null,
    "categoryLabel": "parking"
   },
   {
    "id": "DEMO-0590",
    "category": "accident",
    "amount": 85,
    "vehicleId": "veh-003",
    "driverId": null,
    "date": "+973 3935 0330",
    "vendor": "Body Shop Manama",
    "notes": "Demo reference entry",
    "recurring": false,
    "createdAt": "+973 3935 0330",
    "vehicle": {
     "id": "DEMO-0591",
     "plate": "DEMO-0592",
     "name": "Demo Name",
     "type": "Cargo Van",
     "make": "Mercedes-Benz",
     "model": "Sprinter 316",
     "year": 2023,
     "capacity": "1.8 tons",
     "status": "active",
     "fuelLevel": 92,
     "odometer": 31880,
     "gps": {
      "lat": 26.2361,
      "lng": 50.536,
      "location": "Demo Location"
     },
     "assignedDriverId": "drv-003",
     "insuranceExpiry": "+973 3935 0330",
     "registrationExpiry": "+973 3935 0330",
     "lastService": "+973 3935 0330",
     "nextServiceDue": "+973 3935 0330",
     "notes": "Demo reference entry",
     "driver": {
      "id": "DEMO-0593",
      "name": "Demo Name",
      "phone": "+973 3935 0330",
      "licenseNo": "DEMO-0594",
      "licenseClass": "Light Commercial",
      "licenseExpiry": "+973 3935 0330",
      "status": "on-duty",
      "assignedVehicleId": "veh-003",
      "rating": 5,
      "tripsCompleted": 198,
      "hoursThisWeek": 32,
      "cpr": "+973 3935 0330",
      "joinDate": "+973 3935 0330",
      "emergencyContact": "+973 3935 0330"
     },
     "insuranceDays": 180,
     "registrationDays": 300,
     "serviceDays": 48,
     "home": {
      "lat": 26.2361,
      "lng": 50.536,
      "location": "Demo Location"
     }
    },
    "categoryLabel": "accident"
   },
   {
    "id": "DEMO-0595",
    "category": "accident",
    "amount": 85,
    "vehicleId": "veh-003",
    "driverId": null,
    "date": "+973 3935 0330",
    "vendor": "Body Shop Manama",
    "notes": "Demo reference entry",
    "recurring": false,
    "createdAt": "+973 3935 0330",
    "vehicle": {
     "id": "DEMO-0596",
     "plate": "DEMO-0597",
     "name": "Demo Name",
     "type": "Cargo Van",
     "make": "Mercedes-Benz",
     "model": "Sprinter 316",
     "year": 2023,
     "capacity": "1.8 tons",
     "status": "active",
     "fuelLevel": 92,
     "odometer": 31880,
     "gps": {
      "lat": 26.2361,
      "lng": 50.536,
      "location": "Demo Location"
     },
     "assignedDriverId": "drv-003",
     "insuranceExpiry": "+973 3935 0330",
     "registrationExpiry": "+973 3935 0330",
     "lastService": "+973 3935 0330",
     "nextServiceDue": "+973 3935 0330",
     "notes": "Demo reference entry",
     "driver": {
      "id": "DEMO-0598",
      "name": "Demo Name",
      "phone": "+973 3935 0330",
      "licenseNo": "DEMO-0599",
      "licenseClass": "Light Commercial",
      "licenseExpiry": "+973 3935 0330",
      "status": "on-duty",
      "assignedVehicleId": "veh-003",
      "rating": 5,
      "tripsCompleted": 198,
      "hoursThisWeek": 32,
      "cpr": "+973 3935 0330",
      "joinDate": "+973 3935 0330",
      "emergencyContact": "+973 3935 0330"
     },
     "insuranceDays": 180,
     "registrationDays": 300,
     "serviceDays": 48,
     "home": {
      "lat": 26.2361,
      "lng": 50.536,
      "location": "Demo Location"
     }
    },
    "categoryLabel": "accident"
   },
   {
    "id": "DEMO-0600",
    "category": "tires",
    "amount": 120,
    "vehicleId": "veh-002",
    "driverId": null,
    "date": "+973 3935 0330",
    "vendor": "Tyres Plus",
    "notes": "Demo reference entry",
    "recurring": false,
    "createdAt": "+973 3935 0330",
    "vehicle": {
     "id": "DEMO-0601",
     "plate": "DEMO-0602",
     "name": "Demo Name",
     "type": "Flatbed",
     "make": "Hino",
     "model": "500 Series",
     "year": 2021,
     "capacity": "12 tons",
     "status": "on-trip",
     "fuelLevel": 41,
     "odometer": 126440,
     "gps": {
      "lat": 26.2286,
      "lng": 50.6017,
      "location": "Demo Location"
     },
     "assignedDriverId": "drv-002",
     "insuranceExpiry": "+973 3935 0330",
     "registrationExpiry": "+973 3935 0330",
     "lastService": "+973 3935 0330",
     "nextServiceDue": "+973 3935 0330",
     "notes": "Demo reference entry",
     "driver": {
      "id": "DEMO-0603",
      "name": "Demo Name",
      "phone": "+973 3935 0330",
      "licenseNo": "DEMO-0604",
      "licenseClass": "Heavy Articulated",
      "licenseExpiry": "+973 3935 0330",
      "status": "on-duty",
      "assignedVehicleId": "veh-002",
      "rating": 4.8,
      "tripsCompleted": 538,
      "hoursThisWeek": 41,
      "cpr": "+973 3935 0330",
      "joinDate": "+973 3935 0330",
      "emergencyContact": "+973 3935 0330"
     },
     "insuranceDays": 44,
     "registrationDays": 120,
     "serviceDays": 4,
     "home": null,
     "tripKm": 15.206018989723434,
     "idleMins": 0
    },
    "categoryLabel": "tires"
   },
   {
    "id": "DEMO-0605",
    "category": "tires",
    "amount": 120,
    "vehicleId": "veh-002",
    "driverId": null,
    "date": "+973 3935 0330",
    "vendor": "Tyres Plus",
    "notes": "Demo reference entry",
    "recurring": false,
    "createdAt": "+973 3935 0330",
    "vehicle": {
     "id": "DEMO-0606",
     "plate": "DEMO-0607",
     "name": "Demo Name",
     "type": "Flatbed",
     "make": "Hino",
     "model": "500 Series",
     "year": 2021,
     "capacity": "12 tons",
     "status": "on-trip",
     "fuelLevel": 41,
     "odometer": 126440,
     "gps": {
      "lat": 26.2286,
      "lng": 50.6017,
      "location": "Demo Location"
     },
     "assignedDriverId": "drv-002",
     "insuranceExpiry": "+973 3935 0330",
     "registrationExpiry": "+973 3935 0330",
     "lastService": "+973 3935 0330",
     "nextServiceDue": "+973 3935 0330",
     "notes": "Demo reference entry",
     "driver": {
      "id": "DEMO-0608",
      "name": "Demo Name",
      "phone": "+973 3935 0330",
      "licenseNo": "DEMO-0609",
      "licenseClass": "Heavy Articulated",
      "licenseExpiry": "+973 3935 0330",
      "status": "on-duty",
      "assignedVehicleId": "veh-002",
      "rating": 4.8,
      "tripsCompleted": 538,
      "hoursThisWeek": 41,
      "cpr": "+973 3935 0330",
      "joinDate": "+973 3935 0330",
      "emergencyContact": "+973 3935 0330"
     },
     "insuranceDays": 44,
     "registrationDays": 120,
     "serviceDays": 4,
     "home": null,
     "tripKm": 15.206018989723434,
     "idleMins": 0
    },
    "categoryLabel": "tires"
   },
   {
    "id": "DEMO-0610",
    "category": "spareParts",
    "amount": 95,
    "vehicleId": "veh-007",
    "driverId": null,
    "date": "+973 3935 0330",
    "vendor": "Universal Spares",
    "notes": "Demo reference entry",
    "recurring": false,
    "createdAt": "+973 3935 0330",
    "vehicle": {
     "id": "DEMO-0611",
     "plate": "DEMO-0612",
     "name": "Demo Name",
     "type": "Reefer",
     "make": "Mitsubishi",
     "model": "Fuso Canter",
     "year": 2022,
     "capacity": "3.5 tons",
     "status": "on-trip",
     "fuelLevel": 37,
     "odometer": 67210,
     "gps": {
      "lat": 26.142,
      "lng": 50.65,
      "location": "Demo Location"
     },
     "assignedDriverId": "drv-004",
     "insuranceExpiry": "+973 3935 0330",
     "registrationExpiry": "+973 3935 0330",
     "lastService": "+973 3935 0330",
     "nextServiceDue": "+973 3935 0330",
     "notes": "Demo reference entry",
     "driver": {
      "id": "DEMO-0613",
      "name": "Demo Name",
      "phone": "+973 3935 0330",
      "licenseNo": "DEMO-0614",
      "licenseClass": "Heavy",
      "licenseExpiry": "+973 3935 0330",
      "status": "on-duty",
      "assignedVehicleId": "veh-007",
      "rating": 4.7,
      "tripsCompleted": 301,
      "hoursThisWeek": 44,
      "cpr": "+973 3935 0330",
      "joinDate": "+973 3935 0330",
      "emergencyContact": "+973 3935 0330"
     },
     "insuranceDays": 88,
     "registrationDays": 160,
     "serviceDays": 10,
     "home": {
      "lat": 26.142,
      "lng": 50.65,
      "location": "Demo Location"
     },
     "idleMins": 42
    },
    "categoryLabel": "spare parts"
   },
   {
    "id": "DEMO-0615",
    "category": "spareParts",
    "amount": 95,
    "vehicleId": "veh-007",
    "driverId": null,
    "date": "+973 3935 0330",
    "vendor": "Universal Spares",
    "notes": "Demo reference entry",
    "recurring": false,
    "createdAt": "+973 3935 0330",
    "vehicle": {
     "id": "DEMO-0616",
     "plate": "DEMO-0617",
     "name": "Demo Name",
     "type": "Reefer",
     "make": "Mitsubishi",
     "model": "Fuso Canter",
     "year": 2022,
     "capacity": "3.5 tons",
     "status": "on-trip",
     "fuelLevel": 37,
     "odometer": 67210,
     "gps": {
      "lat": 26.142,
      "lng": 50.65,
      "location": "Demo Location"
     },
     "assignedDriverId": "drv-004",
     "insuranceExpiry": "+973 3935 0330",
     "registrationExpiry": "+973 3935 0330",
     "lastService": "+973 3935 0330",
     "nextServiceDue": "+973 3935 0330",
     "notes": "Demo reference entry",
     "driver": {
      "id": "DEMO-0618",
      "name": "Demo Name",
      "phone": "+973 3935 0330",
      "licenseNo": "DEMO-0619",
      "licenseClass": "Heavy",
      "licenseExpiry": "+973 3935 0330",
      "status": "on-duty",
      "assignedVehicleId": "veh-007",
      "rating": 4.7,
      "tripsCompleted": 301,
      "hoursThisWeek": 44,
      "cpr": "+973 3935 0330",
      "joinDate": "+973 3935 0330",
      "emergencyContact": "+973 3935 0330"
     },
     "insuranceDays": 88,
     "registrationDays": 160,
     "serviceDays": 10,
     "home": {
      "lat": 26.142,
      "lng": 50.65,
      "location": "Demo Location"
     },
     "idleMins": 42
    },
    "categoryLabel": "spare parts"
   },
   {
    "id": "DEMO-0620",
    "category": "registration",
    "amount": 90,
    "vehicleId": "veh-005",
    "driverId": null,
    "date": "+973 3935 0330",
    "vendor": "GOV Bahrain",
    "notes": "Demo reference entry",
    "recurring": false,
    "createdAt": "+973 3935 0330",
    "vehicle": {
     "id": "DEMO-0621",
     "plate": "DEMO-0622",
     "name": "Demo Name",
     "type": "Bus",
     "make": "Yutong",
     "model": "ZK6122H",
     "year": 2019,
     "capacity": "45 seats",
     "status": "idle",
     "fuelLevel": 64,
     "odometer": 178220,
     "gps": {
      "lat": 26.2128,
      "lng": 50.6872,
      "location": "Demo Location"
     },
     "assignedDriverId": "drv-005",
     "insuranceExpiry": "+973 3935 0330",
     "registrationExpiry": "+973 3935 0330",
     "lastService": "+973 3935 0330",
     "nextServiceDue": "+973 3935 0330",
     "notes": "Demo reference entry",
     "driver": {
      "id": "DEMO-0623",
      "name": "Demo Name",
      "phone": "+973 3935 0330",
      "licenseNo": "DEMO-0624",
      "licenseClass": "Passenger Bus",
      "licenseExpiry": "+973 3935 0330",
      "status": "standby",
      "assignedVehicleId": "veh-005",
      "rating": 4.6,
      "tripsCompleted": 267,
      "hoursThisWeek": 18,
      "cpr": "+973 3935 0330",
      "joinDate": "+973 3935 0330",
      "emergencyContact": "+973 3935 0330"
     },
     "insuranceDays": 70,
     "registrationDays": 140,
     "serviceDays": 15,
     "home": {
      "lat": 26.2128,
      "lng": 50.6872,
      "location": "Demo Location"
     }
    },
    "categoryLabel": "registration"
   },
   {
    "id": "DEMO-0625",
    "category": "registration",
    "amount": 90,
    "vehicleId": "veh-005",
    "driverId": null,
    "date": "+973 3935 0330",
    "vendor": "GOV Bahrain",
    "notes": "Demo reference entry",
    "recurring": false,
    "createdAt": "+973 3935 0330",
    "vehicle": {
     "id": "DEMO-0626",
     "plate": "DEMO-0627",
     "name": "Demo Name",
     "type": "Bus",
     "make": "Yutong",
     "model": "ZK6122H",
     "year": 2019,
     "capacity": "45 seats",
     "status": "idle",
     "fuelLevel": 64,
     "odometer": 178220,
     "gps": {
      "lat": 26.2128,
      "lng": 50.6872,
      "location": "Demo Location"
     },
     "assignedDriverId": "drv-005",
     "insuranceExpiry": "+973 3935 0330",
     "registrationExpiry": "+973 3935 0330",
     "lastService": "+973 3935 0330",
     "nextServiceDue": "+973 3935 0330",
     "notes": "Demo reference entry",
     "driver": {
      "id": "DEMO-0628",
      "name": "Demo Name",
      "phone": "+973 3935 0330",
      "licenseNo": "DEMO-0629",
      "licenseClass": "Passenger Bus",
      "licenseExpiry": "+973 3935 0330",
      "status": "standby",
      "assignedVehicleId": "veh-005",
      "rating": 4.6,
      "tripsCompleted": 267,
      "hoursThisWeek": 18,
      "cpr": "+973 3935 0330",
      "joinDate": "+973 3935 0330",
      "emergencyContact": "+973 3935 0330"
     },
     "insuranceDays": 70,
     "registrationDays": 140,
     "serviceDays": 15,
     "home": {
      "lat": 26.2128,
      "lng": 50.6872,
      "location": "Demo Location"
     }
    },
    "categoryLabel": "registration"
   }
  ],
  "cats": [
   "insurance",
   "registration",
   "salary",
   "leasing",
   "financing",
   "tires",
   "spareParts",
   "accident",
   "tolls",
   "parking"
  ],
  "customCats": []
 },
 "/api/profitability": {
  "period": "month",
  "vehicles": [
   {
    "id": "DEMO-0630",
    "label": "Demo vehicle",
    "plate": "DEMO-0631",
    "revenue": 0,
    "fuel": 0,
    "maintenance": 0,
    "driver": 0,
    "other": 0,
    "overhead": 50,
    "net": 0,
    "byCat": {
     "fuel": 0,
     "maintenance": 0
    }
   },
   {
    "id": "DEMO-0632",
    "label": "Demo vehicle",
    "plate": "DEMO-0633",
    "revenue": 0,
    "fuel": 32,
    "maintenance": 0,
    "driver": 0,
    "other": 187.5,
    "overhead": 50,
    "net": -219.5,
    "byCat": {
     "tires": 155.5,
     "tolls": 32,
     "fuel": 32,
     "maintenance": 0
    }
   },
   {
    "id": "DEMO-0634",
    "label": "Demo vehicle",
    "plate": "DEMO-0635",
    "revenue": 640,
    "fuel": 134,
    "maintenance": 1020,
    "driver": 700,
    "other": 740,
    "overhead": 50,
    "net": -1954,
    "byCat": {
     "financing": 500,
     "tires": 240,
     "fuel": 134,
     "maintenance": 1020
    }
   },
   {
    "id": "DEMO-0636",
    "label": "Demo vehicle",
    "plate": "DEMO-0637",
    "revenue": 95,
    "fuel": 18,
    "maintenance": 0,
    "driver": 0,
    "other": 170,
    "overhead": 50,
    "net": -93,
    "byCat": {
     "accident": 170,
     "fuel": 18,
     "maintenance": 0
    }
   },
   {
    "id": "DEMO-0638",
    "label": "Demo vehicle",
    "plate": "DEMO-0639",
    "revenue": 0,
    "fuel": 0,
    "maintenance": 0,
    "driver": 0,
    "other": 800,
    "overhead": 50,
    "net": -800,
    "byCat": {
     "leasing": 800,
     "fuel": 0,
     "maintenance": 0
    }
   },
   {
    "id": "DEMO-0640",
    "label": "Demo vehicle",
    "plate": "DEMO-0641",
    "revenue": 0,
    "fuel": 64,
    "maintenance": 0,
    "driver": 720,
    "other": 336,
    "overhead": 50,
    "net": -1120,
    "byCat": {
     "insurance": 156,
     "registration": 180,
     "fuel": 64,
     "maintenance": 0
    }
   },
   {
    "id": "DEMO-0642",
    "label": "Demo vehicle",
    "plate": "DEMO-0643",
    "revenue": 110,
    "fuel": 20,
    "maintenance": 0,
    "driver": 0,
    "other": 0,
    "overhead": 50,
    "net": 90,
    "byCat": {
     "fuel": 20,
     "maintenance": 0
    }
   },
   {
    "id": "DEMO-0644",
    "label": "Demo vehicle",
    "plate": "DEMO-0645",
    "revenue": 145,
    "fuel": 28,
    "maintenance": 0,
    "driver": 650,
    "other": 190,
    "overhead": 50,
    "net": -723,
    "byCat": {
     "spareParts": 190,
     "fuel": 28,
     "maintenance": 0
    }
   },
   {
    "id": "DEMO-0646",
    "label": "Demo vehicle",
    "plate": "DEMO-0647",
    "revenue": 0,
    "fuel": 0,
    "maintenance": 0,
    "driver": 0,
    "other": 0,
    "overhead": 50,
    "net": 0,
    "byCat": {
     "fuel": 0,
     "maintenance": 0
    }
   }
  ],
  "totals": {
   "revenue": 990,
   "fuel": 296,
   "maintenance": 1020,
   "driver": 2070,
   "other": 2423.5,
   "net": -5559.5,
   "unassignedRev": 0,
   "unassignedFuel": 0,
   "unassignedOther": 50,
   "overhead": 690
  },
  "cats": [
   "insurance",
   "registration",
   "salary",
   "leasing",
   "financing",
   "tires",
   "spareParts",
   "accident",
   "tolls",
   "parking"
  ]
 },
 "/api/company": {
  "name": "Demo Name",
  "tagline": "Commercial & household relocation across the Gulf",
  "years": 15,
  "location": "Demo Location",
  "phone": "+973 3935 0330",
  "hours": "24/7 commercial and household shifting",
  "coverage": [
   "Bahrain",
   "Qatar",
   "Kuwait",
   "Oman",
   "UAE",
   "Saudi Arabia"
  ],
  "email": "demo@redsuntransport.bh",
  "website": ""
 }
}
