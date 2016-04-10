# Database-II-Project-MySQL-PHP-AngularJS-Ionic-Cordova

TODO: Write a project description

IMPORTANT NOTE: This guide only work for iOS and Linux. Basic knowleges of SQL Admin or XAMPP are needed.  

## Installation

#### Ionic Cordova Android/iOS
##### Installation instructions excerpt from: http://ionicframework.com/getting-started/

1. Install Node.js 4 (Node 5 does not work at the moment!):   https://nodejs.org/en/download/
2. Install the latest Cordova and Ionic command-line tools:   `$ npm install -g cordova ionic`
3. Download the latest Android and iOS platform to install required platform dependencies. Follow the Android and iOS         platform guides to install required platform dependencies.
    * Android: http://cordova.apache.org/docs/en/5.1.1/guide/platforms/android/index.html
    * iOS: http://cordova.apache.org/docs/en/5.1.1/guide/platforms/ios/index.html

#### XAMPP (PHP + MySQL server) 
1. Download XAMPP installer: https://www.apachefriends.org/download.html

#### Important 32 bit libaries 

######Debian/Ubuntu:
If you're running on a 64 bit machine, the Android SDK & emulator also needs some 32 bit libraries:

* `sudo apt-get update; sudo apt-get install --yes lib32z1 lib32stdc++6`


## Usage

#### PHP + MySQL
Instructions excerpt from: http://www.cs.uml.edu/~cchen/310-S16/index.html

1. Replace the XAMPP directory 'htdocs' with github 'htdocs'. 
2. Start XAMPP servers in the controller panel: https://www.youtube.com/watch?v=h6DEDm7C37A
3. In the web browser go to the url `http://localhost/phpmyadmin/` or http://127.0.0.1/phpmyadmin/
4. Create or set Tables for the Database
5. Setting Privilege and Creating a User
   * Click on the Privileges tab at the top of the page to view a list of user accounts
   * Click on the Add a new User link at the bottom of the page
   * In the Login Information section, change the following settings:
   * Type a user name in the second field of the User name row
   * Click on the drop-down menu next to Host to select localhost in the second field
      * Type the password in Password and Re-type fields.
      * In the Global Privileges, click on the Check All link at the top of the screen to select all of the checkboxes for Data, Structure, and Administration sections
      
6. In htdocs/server, change all PHP files server, user, password and database name corresponding to step 5.  

#### Cordova + Android + Ionic/Angularjs

1. Create, configure and start Android or iOS emulator. 
    * Android: http://cordova.apache.org/docs/en/5.1.1/guide/platforms/android/index.html
    * iOS: http://cordova.apache.org/docs/en/5.1.1/guide/platforms/ios/index.html
2. Open myApp directory to check if it is missing Ionic and Cordova dependicies then type the following:
    * For Android:
      * `$ ionic platform add android`
      * `$ ionic build android`
    * For iOS:
      * `$ ionic platform add ios`
      * `$ ionic build ios`
3. Compile and Run the App in the emulator 
   * Android: `$ ionic emulate android`
   * iOS: `$ ionic emulate ios`

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

TODO: Write history

## Credits

TODO: Write credits

## License

TODO: Write license

