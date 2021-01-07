$(function() {
	
	
	$("#trx_slider").on("input", function(e) {
		$("#trx_value").val($("#trx_slider").val());
	});
	
	
	$("#trx_value").on("input", function(e) {
		$("#trx_slider").val($("#trx_value").val());
	});

});

(function() {
	'use strict';

	const ABI = [
	{
		"constant": true,
		"inputs": [],
		"name": "total_session",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "contractInfo",
		"outputs": [
			{
				"name": "_invested",
				"type": "uint256"
			},
			{
				"name": "_withdrawn",
				"type": "uint256"
			},
			{
				"name": "_match_bonus",
				"type": "uint256"
			},
			{
				"name": "_launch_date",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_addr",
				"type": "address"
			}
		],
		"name": "userInfo",
		"outputs": [
			{
				"name": "for_withdraw",
				"type": "uint256"
			},
			{
				"name": "total_invested",
				"type": "uint256"
			},
			{
				"name": "total_withdrawn",
				"type": "uint256"
			},
			{
				"name": "total_match_bonus",
				"type": "uint256"
			},
			{
				"name": "structure",
				"type": "uint256[3]"
			},
			{
				"name": "deposits",
				"type": "uint256[4][100]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_newdate",
				"type": "uint256"
			},
			{
				"name": "_length",
				"type": "uint16"
			},
			{
				"name": "_roi",
				"type": "uint16"
			},
			{
				"name": "_ref1",
				"type": "uint8"
			},
			{
				"name": "_ref2",
				"type": "uint8"
			},
			{
				"name": "_ref3",
				"type": "uint8"
			}
		],
		"name": "relaunch",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "withdraw",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_addr",
				"type": "address"
			}
		],
		"name": "payoutOf",
		"outputs": [
			{
				"name": "value",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "launch_date",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "ref_bonuses",
		"outputs": [
			{
				"name": "",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "match_bonus",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "withdrawn",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "invested",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "players",
		"outputs": [
			{
				"name": "upline",
				"type": "address"
			},
			{
				"name": "dividends",
				"type": "uint256"
			},
			{
				"name": "match_bonus",
				"type": "uint256"
			},
			{
				"name": "last_payout",
				"type": "uint256"
			},
			{
				"name": "total_invested",
				"type": "uint256"
			},
			{
				"name": "total_withdrawn",
				"type": "uint256"
			},
			{
				"name": "total_match_bonus",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "_dev",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_upline",
				"type": "address"
			}
		],
		"name": "deposit",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "addr",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "upline",
				"type": "address"
			}
		],
		"name": "Upline",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "addr",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "NewDeposit",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "addr",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "from",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "MatchPayout",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "addr",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "Withdraw",
		"type": "event"
	}
];

    let contract = null;

    let VueTRON = {
        data() {
            return {
                tron: {	
                    tronWeb: false,
                    auth: false,
                    account: ''
                }
            };
        },
        created() {
            let self = this,
                tries = 0;

            setTimeout(function initTimer() {
                if(!window.tronWeb) return ++tries < 50 ? setTimeout(initTimer, 100) : null;

                self.tron.tronWeb = !!window.tronWeb;

                window.tronWeb.on('addressChanged', function() {
                    self.tron.account = window.tronWeb.defaultAddress.base58;
                });

                setTimeout(function chechAuth() {
                    self.tron.auth = window.tronWeb && window.tronWeb.ready;
                    if(!self.tron.auth) setTimeout(chechAuth, 200);
                    else self.tron.account = window.tronWeb.defaultAddress.base58;
                }, 200);
            }, 100);
        },
        methods: {
            getTronWeb() {
                return new Promise((resolve, reject) => {
                    window.tronWeb ? resolve(window.tronWeb) : reject('TronWeb not found');
                });
            }
        }
    };

	window.App = new Vue({
  		mixins: [VueTRON],
		el: '#App',
		data: {
            default_upline: 'TRuAr8z9eCNXSxzcJKAFo9z4zJd2SS76EG',
            upline: 'TRuAr8z9eCNXSxzcJKAFo9z4zJd2SS76EG',
            contract_address: 'TTSRiHjfdVxStpF6JH3rag5fjSp183ebh8', // TTzv1Vpnvpqu6wCqzUFZpSVnBrunEiSeGA
            contract: {
                invested: 0,
                withdraw: 0,
                match_bonus: 0,
				launch_date: 1610107200
            },
			current_date: new Date().getTime()/1e3,
            user: {
            	trx: 0,
                for_withdraw: 0,
                total_invested: 0,
                total_withdrawn: 0,
                total_match_bonus: 0,
                structure: [0,0,0],
				deposits: [[0,0,0,0]]
            },
            events: [],
			dep_amount: 100
		},
		mounted() {
			
            let m = location.search.match(/ref=(T[1-9A-HJ-NP-Za-km-z]{33})/i);
            if(m) {
            	this.upline = m[1];
            	document.cookie = "upline=" + this.upline + "; path=/; expires=" + (new Date(new Date().getTime() + 86400 * 365 * 1000)).toUTCString();
            }

            m = document.cookie.match(/upline=(T[1-9A-HJ-NP-Za-km-z]{33})/i);
            if(m) this.upline = m[1];

		    if(!document.cookie.match(/coopolice=1/)) {
		    	this.notice('We use cookies to store temporary data of your current session. If you agree to our use of cookies, continue using our dApp.', '70001d',  0).then(() => (document.cookie = 'coopolice=1; Max-Age=31536000; path=/'));
		    }

            setInterval(() => {
                this.getContractInfo();
                this.getUserInfo();
            }, 3000);
		},
        watch: {
            'tron.account'() {
                this.getTronWeb().then(tronWeb => {
                    contract = tronWeb.contract(ABI, tronWeb.address.toHex(this.contract_address));

                    this.getContractInfo();
                    this.getEventsList();
                    this.getUserInfo();
                });
            }
        },
		methods: {
			// colors: primary = 70001d; success = 4ca1af; warning = f7bb97; error = ef629f
			notice(msg, color = '70001d', time = 3000) {
				return new Promise((resolve, reject) => {
					let wrap = $('<div style="position:fixed; left:calc(50% - 150px); box-shadow:0 5px 25px rgba(0,0,0,0.2); width:320px; top:40px; background:#' + (color ? color : '70001d') + '; border-radius:10px; color:#fff; padding:20px 20px; font:14px/1.2 Tahoma, sans-serif; cursor:pointer; z-index:999999; text-align:center;">' + msg + '</div>')
						.on('click', () => { wrap.remove(); resolve(); })
						.appendTo('body');
					if(time) setTimeout(() => { wrap.remove(); }, time);
				});
			},
			copyText(value) {
				let s = document.createElement('input');
				s.value = value;
				document.body.appendChild(s);

				if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
					s.contentEditable = true;
					s.readOnly = false;
					let range = document.createRange();
					range.selectNodeContents(s);
					let sel = window.getSelection();
					sel.removeAllRanges();
					sel.addRange(range);
					s.setSelectionRange(0, 999999);
				} else
					s.select();

				try {
					document.execCommand('copy');
					this.notice('Link copied to clipboard', '70001d');
				} catch (err) {}

				s.remove();
			},
            getContractInfo() {
                this.getTronWeb().then(tronWeb => {
					contract = tronWeb.contract(ABI, tronWeb.address.toHex(this.contract_address));
                    if(contract) {
                        contract.contractInfo().call().then(res => {
                        	this.contract.invested = parseFloat(tronWeb.fromSun(res._invested));
                        	this.contract.withdraw = parseFloat(tronWeb.fromSun(res._withdrawn));
                        	this.contract.match_bonus = parseFloat(tronWeb.fromSun(res._match_bonus));
							this.contract.launch_date = res._launch_date;
							this.current_date = Math.round(new Date().getTime()/1e3);
                        });
                    }
                });
            },
            getUserInfo() {
                this.getTronWeb().then(tronWeb => {
                    tronWeb.trx.getBalance(this.tron.account).then(res => {
                        this.user.trx = parseFloat(tronWeb.fromSun(res));
                    });
					contract = tronWeb.contract(ABI, tronWeb.address.toHex(this.contract_address));
                    if(contract) {
						contract.userInfo(this.tron.account).call().then(res => {
							this.user.for_withdraw = parseFloat(tronWeb.fromSun(res.for_withdraw));
							this.user.total_invested = parseFloat(tronWeb.fromSun(res.total_invested));
							this.user.total_withdrawn = parseFloat(tronWeb.fromSun(res.total_withdrawn));
							this.user.total_match_bonus = parseFloat(tronWeb.fromSun(res.total_match_bonus));
							this.user.structure = res.structure;
							this.user.deposits = res.deposits;
						});
                    }
                });
            },
            getEventsList() {
            	//fetch('https://api.trongrid.io/v1/contracts/' + this.contract_address + '/events?event_name=&only_confirmed=true&order_by=block_timestamp%2Cdesc').then(r => r.json()).then(res => {
            	fetch('https://api.shasta.trongrid.io/v1/contracts/' + this.contract_address + '/events?event_name=&only_confirmed=true&order_by=block_timestamp%2Cdesc').then(r => r.json()).then(res => {
            	//fetch('https://testapi.tronex.io/events/' + this.contract_address + '').then(r => r.json()).then(res => {
					if(res.data) {
						res.data.forEach(v => {
							this.events.push({
								time: v.block_timestamp,
								type: v.event_name,
								amount: (v.result.amount / 1e6) || 0,
								tx: v.transaction_id
							});
						});
					}
            	});
            },
            deposit(amount) {
                amount = parseFloat(amount) || 0;
                if(amount >= 100) {
                    this.getTronWeb().then(tronWeb => {
                        this.notice('Confirm transaction', '70001d');
                        contract.deposit(this.upline).send({
                            callValue: tronWeb.toSun(amount),
                            shouldPollResponse: true
                        }).then(res => {
                            this.getUserInfo();
                            this.notice('Transaction successful', '70001d');
                        });
                    });
                } else {
					this.notice('100 TRX MINIMUM', '70001d');
				}
            },
            withdraw() {
                this.getTronWeb().then(tronWeb => {
                    this.notice('Confirm transaction', '70001d');
					contract = tronWeb.contract(ABI, tronWeb.address.toHex(this.contract_address));
                    contract.withdraw().send({shouldPollResponse: true}).then(res => {
                        this.getUserInfo();
                        this.notice('Transaction successful', '70001d');
                    });
                });
            }
		}
	});
})();