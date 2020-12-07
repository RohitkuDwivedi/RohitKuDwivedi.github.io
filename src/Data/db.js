class data {
    constructor() {
        this.me = {
            fname: "Rohit",
            lname: "Kumar Dwivedi",
            phone: "9977770648",
            contact: [
                {
                    fname: "Deepak",
                    lname: "kumar",
                    phone: ["+919803470060", "+919315807329"],
                    address: ""
                },
                {
                    fname: "Deepak",
                    lname: "kumar",
                    phone: ["+919803470060", "+919315807329"],
                    address: ""
                }
            ]
        }
        this.allData = {
            "hirmi": [
                {
                    fname: "kritika",
                    lname: "raina",
                    phone: 9898879830,
                    address: "hirmi township",
                    contact: [
                        {
                            fname: "arti",
                            lname: "raina",
                            relation: "mother",
                            phone: 9898879830,
                            address: "E-143,hirmi,township",
                        },
                        {
                            fname: "kuldeep",
                            lname: "raina",
                            relation: "father",
                            phone: 9826639780,
                            address: "E-143,hirmi,township",
                        }
                    ]
                }
            ],
            "college": [],
            "family": []

        }

    }
    getAllGroups() {
        let allGroups = {}
        Object.keys(this.allData).forEach(key => {
            key = key.toString()
            allGroups[key] = this.allData[key].length
        });
        return allGroups
    }

    getMyDetails() {
        return this.me
    }

}
export default data = new data()