
              _______________________________
              |             User            |_____________
              |_____________________________|            |
              | username: String            |            |
              | email: String               |            |
              | password: string            |            |
              |_____________________________|            |
                      |                                  |
                      |                                  |
      ________________|______________        ______________________________
      |       Feed                  |        |      Schedule              |
      |_____________________________|        |____________________________|
      | user: User                  |        |  user: User                |
      | time: DateTime              |        |  hours: Number             |
      | longitude: Number           |        |  minutes: Number           |
      | latitude: Number            |        |  longitude: Number         |
      | food: Food                  |        |  food: Food                |
      | duckCount: Number           |        |  duckCount: Number         |
      | feedAmount: Number          |        |  feedAmount: Number        |
      |_____________________________|        |  starDate: Date            |
                    |                        |  endDate: Date             |
                    |                        |  confirmed: Boolean        |
                    |                        |  lastConfirmed: Date       |
                    |                        |____________________________|
                    |______________________________________|
                    |
      ______________|________________        ______________________________
      |   Food                      |________|  Foodtype                  |
      |_____________________________|        |____________________________|
      | name: String                |        |  name: String              |
      | type: Foodtype              |        |____________________________|
      | description: String         |
      |_____________________________|
