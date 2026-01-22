let data =  [
    {
        "clock_in": {
            "latitude": 28.5768211,
            "longitude": 77.3171015
        },
        "clock_out": {
            "latitude": 28.5768958,
            "longitude": 77.3170345
        }
    },
    {
        "clock_in": {
            "latitude": 28.5768261,
            "longitude": 77.3170227
        },
        "clock_out": {
            "latitude": 28.5768211,
            "longitude": 77.3171015
        }
    },
    {
        "clock_in": {
            "latitude": 28.576888,
            "longitude": 77.3170605
        },
        "clock_out": {
            "latitude": 28.5768829,
            "longitude": 77.317087
        }
    },
    {
        "clock_in": {
            "latitude": 28.5768959,
            "longitude": 77.3171104
        },
        "clock_out": {
            "latitude": 28.5576622,
            "longitude": 77.3453071
        }
    }
]

console.warn("data-->>", data)


  console.warn("----------------")
  
data?.map((item, index) =>
console.warn("onlyMap-->>", item)
)

console.warn("----------------")


data?.map((item, index) =>
console.warn("map+enteries", Object.entries(item))
)


console.warn("---------------------------")


data?.map((item, index) =>
Object.entries(item).map((item) => 
console.warn("map+enteries+map-->>", item)
)
)


console.warn("---------------------------")


data?.map((item, index) =>
Object.entries(item).map(([type, coords]) => 
console.warn("destructered-->>", type, "coords-->>", coords)
)
)

console.warn("---------------------------")
