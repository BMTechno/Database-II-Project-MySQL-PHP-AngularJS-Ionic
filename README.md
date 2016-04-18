# Database-II-Project-MySQL-PHP-AngularJS-Ionic-Cordova

Description: Making an Android App connecting to a MySQL server using Ionic.js and Cordova. 
             This is a project sequence for my [Database II](http://www.cs.uml.edu/~cchen/310-S16/index.html) class at [Umass Lowell](http://www.uml.edu/). 

IMPORTANT NOTE: This guide only work for iOS and Linux. Basic knowlege of SQL Admin or XAMPP are needed. THIS PROJECT IS RUNNING BUT NOT COMPLETED!!!  

## Installation

#### Ionic Cordova Android/iOS
##### Installation instructions excerpt from: http://ionicframework.com/getting-started/

1. Install Node.js 4 (Node 5 does not work at the moment!):   https://nodejs.org/en/download/
2. Install the latest Cordova and Ionic command-line tools:   `$ npm install -g cordova ionic`
3. Download the latest Android and iOS platform to install required platform dependencies. Follow the Android and iOS         platform guides to install required platform dependencies.
    * [Android](http://cordova.apache.org/docs/en/5.1.1/guide/platforms/android/index.html)
    * [iOS](http://cordova.apache.org/docs/en/5.1.1/guide/platforms/ios/index.html)

#### XAMPP (PHP + MySQL server) 
* Download XAMPP installer: https://www.apachefriends.org/download.html

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
   * If trying to run the Android simulator.
   * Change to the local IP address for all http request from `127.0.0.1` to `10.0.2.2` in myApp/www/js/controllers.js.
4. Create or set Tables for the Database
5. Setting Privilege and Creating a User
   * Click on the Privileges tab at the top of the page to view a list of user accounts
   * Click on the Add a new User link at the bottom of the page
   * In the Login Information section, change the following settings:
   * Type a user name in the second field of the User name row
   * Click on the drop-down menu next to Host to select localhost in the second field
      * Type the password in Password and Re-type fields.
      * In the Global Privileges, click on the Check All link at the top of the screen to select all of the checkboxes for Data, Structure, and Administration sections
      
6. In htdocs/server, inside all PHP files change server, user, password and database name corresponding to step 5.  
7. Execute htdocs/SQL in PHPMyAdmin.  

#### Cordova + Android + Ionic/Angularjs

1. Create, configure and start Android or iOS emulator. 
    * [Android](http://cordova.apache.org/docs/en/5.1.1/guide/platforms/android/index.html)
    * [iOS](http://cordova.apache.org/docs/en/5.1.1/guide/platforms/ios/index.html)
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

#### Run on Desktop
* Change all IP address for $http POST && GET request in the Angular controller from Android(10.0.2.2) to 127.0.0.1
* In the terminal direct to myApp's directory and type the following command to run on Desktop: `$ ionic serve` 

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Credits

Author: Son Nguyen & Vivien Chow

## License

The content of this project itself is licensed under the [Creative Commons Attribution 3.0 license](http://creativecommons.org/licenses/by/3.0/us/deed.en_US), and the underlying source code used to format and display that content is licensed under the [MIT license](http://opensource.org/licenses/mit-license.php).

