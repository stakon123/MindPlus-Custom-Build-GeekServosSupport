		 //
		 // Νεο Μπλοκ Εντολών
		 //
		{
          blockType: BlockType.TEXT,
          text: formatMessage({
            id: "gui.blocklyText.blockTitle.stamotorControl",
            description: 'Label for block title',
            default: 'Πράσινος και Γκρί Κινητήρας'
          }),
          titleType: TitleType.firstLevel
        }, 
		 //
		 // stath1_green_motor : Κώδικάς για Πράσινο Κινητήρα σε Online mode
		 // Δήλωση του Μπλοκ, βασισμένο στο alxs1_set_motor_speed
		 //
		{
		  opcode: 'stath1_green_motor',
          blockType: BlockType.COMMAND,
          text: formatMessage({
            id: "gui.blocklyText.setstath1GreenMotor",
            description: 'Label for the blocklyText of set green motor speed',
            default: 'Κινητήρας Πράσινος στο [PORT] με φορά [DIRECTION] με ταχύτητα [SPEED]'
          }),
          arguments: {
            PORT: {
 			  type: ArgumentType.STRING,
              menu: 'digitalPortsMenu',
              onlyField: true,
              options: buildFieldMenu(DIGITAL_PORTS, "D9", this._initDigitalPortsMenu()),
              defaultValue: DIGITAL_PORTS.D9
			  
            },
            DIRECTION: {
              type: ArgumentType.STRING,
              menu: 'directionsMenu',
              onlyField: true,
              options: buildFieldMenu(DIRECTIONS, "HIGH", this._initDirectionsMenu()),
              defaultValue: DIRECTIONS["Ρολογιού"]
            },
            SPEED: {
              type: ArgumentType.RANGE,
              inputParams: { rangeMax: 90, rangeMin: 0 },
              defaultValue: 0,
              dfCheck: (0, _defineProperty2.default)({}, _index.LanguageCpp, DataType.NUMBER)
            }
          }
        }, 
		 //
		 // stath1_grey_motor : Κώδικάς για Γκρί Κινητήρα σε Online mode
		 // Δήλωση του Μπλοκ, βασισμένο στο alxs1_set_servo_angle
		 //
		{
		  opcode: 'stath1_grey_motor',
          blockType: BlockType.COMMAND,
          text: formatMessage({
            id: "gui.blocklyText.setstath1_grey_motor",
            description: 'Label for the blocklyText of set green motor speed',
            // Άλλαξα το κείμενο για να περιλαμβάνει το PORT
            default: 'Κινητήρας Γκρί στο [PORT] όρισε γωνία [ANGLE]'
          }),
          arguments: {
            PORT: {
 			  type: ArgumentType.STRING,
              menu: 'digitalPortsMenu',
              onlyField: true,
              options: buildFieldMenu(DIGITAL_PORTS, "D9", this._initDigitalPortsMenu()),
              defaultValue: DIGITAL_PORTS.D9
			  
            },ANGLE: {
              type: ArgumentType.RANGE,
              inputParams: {
                rangeMax: 360,
                rangeMin: 0
              },
              defaultValue: 0,
              dfCheck: (0, _defineProperty2.default)({}, _index.LanguageCpp, DataType.NUMBER)
            }
          }
        }


		 //
		 // stath1_green_motor : Κώδικάς για Πράσινο Κινητήρα σε Online mode
		 // Υλοποιηση της συναρτησης
		 //
  {
	key: "stath1_green_motor",
	value: function stath1_green_motor(args, util) {
      if (!this.product.isReady()) return;
	  	var pin = parseInt(args.PORT);
		var speed = parseInt(args.SPEED);
		var direction = args.DIRECTION === 'HIGH' ? 1 : 0;
		var firmata = this.product.board.connectScratch.firmata;

		if (direction === 1) {
			speed = 90 - speed;
		} else {
			speed = 90 + speed;
		}
      if (!firmata) return;
      if (firmata.serialWriteIsAvailable()) {
       // firmata.servoConfig(pin, 0, 0);
		firmata.servoConfig(pin,500,2500);
        firmata.servoWrite(pin, speed);
      } else {
        util.yield();
        this.runtime.requestBreakThreads();
      }
    }
   }, 
     	 //
		 // stath1_grey_motor : Κώδικάς για Γκρί Κινητήρα σε Online mode
		 // Υλοποιηση της συναρτησης
		 //
   
   { 
	key: "stath1_grey_motor",
    value: function stath1_grey_motor(args, util) {
      if (!this.product.isReady()) return;
	  	var pin = parseInt(args.PORT);
		var angle = parseInt(args.ANGLE);
		var firmata = this.product.board.connectScratch.firmata;

      if (!firmata) return;

      if (firmata.serialWriteIsAvailable()) {
        //firmata.servoConfig(pin, 0, 0);
		firmata.servoConfig(pin,500,2505);
        firmata.servoWrite(pin, (angle / 2));
      } else {
        util.yield();
        this.runtime.requestBreakThreads();
      }
    }

  }