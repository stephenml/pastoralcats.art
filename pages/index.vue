<template>
  <div>
    <div class="header" :style="{
      left: `${-offsetLeft}px`,
      backgroundColor: offsetTop > 0 ? 'rgba(0, 0, 0, 0.65)' : ''
    }">
      <div class="title">
        PASTORAL CATS
      </div>
      <div class="links">
        <a class="link-button" target="_blank" href="https://opensea.io/collection/pastoral-cats">
          <div>
            <svg fill="#FFFFFF" width="32" height="32" style="fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 2;" viewBox="0 0 412 412" xmlns="http://www.w3.org/2000/svg">
              <g transform="matrix(1,0,0,1,-0.75957,-0.739775)">
                <rect height="411.112" style="fill:none;" width="411.112" x="0.76" y="0.74"></rect>
                <clipPath>
                  <rect height="411.112" width="411.112" x="0.76" y="0.74"></rect>
                </clipPath>
                <g transform="matrix(4.16667,0,0,4.16667,-1.64573,-1.60285)">
                  <path d="M50.093,0.74C77.321,0.74 99.427,22.845 99.427,50.073C99.427,77.301 77.321,99.407 50.093,99.407C22.865,99.407 0.76,77.301 0.76,50.073C0.76,22.845 22.865,0.74 50.093,0.74ZM63.569,36.482L63.831,36.818C63.961,36.986 64.088,37.15 64.2,37.3C64.3,37.5 64.5,37.7 64.6,38C64.775,38.263 64.931,38.525 65.084,38.788L65.216,39.012C65.369,39.275 65.525,39.538 65.7,39.8C65.8,40.1 66,40.4 66.1,40.7C66.5,41.5 66.8,42.3 66.9,43.2C67,43.4 67,43.6 67,43.7C67.1,43.9 67.1,44.2 67.1,44.5C67.2,45.4 67.1,46.2 67,47.1C66.963,47.25 66.925,47.386 66.888,47.518L66.813,47.782C66.775,47.914 66.738,48.05 66.7,48.2C66.6,48.5 66.5,48.9 66.3,49.3C66,50 65.6,50.7 65.2,51.4C65.1,51.6 64.9,51.9 64.7,52.2C64.5,52.5 64.3,52.7 64.2,53C64,53.3 63.7,53.6 63.5,53.9C63.3,54.2 63.1,54.5 62.8,54.8C62.5,55.2 62.1,55.6 61.8,56C61.6,56.2 61.4,56.5 61.1,56.7C60.9,56.9 60.7,57.2 60.4,57.4C60.1,57.7 59.8,58 59.5,58.2L58.9,58.7C58.8,58.8 58.7,58.8 58.6,58.8L54.2,58.8L54.2,64.4L59.7,64.4C60.9,64.4 62.1,64 63,63.2C63.3,62.9 64.7,61.7 66.4,59.9C66.5,59.8 66.5,59.8 66.6,59.8L81.8,55.4C82.4,55.1 82.6,55.3 82.6,55.6L82.6,58.8C82.6,59 82.5,59.1 82.3,59.2C81.3,59.6 77.8,61.2 76.4,63.2C72.7,68.3 69.9,75.6 63.7,75.6L37.6,75.6C28.4,75.6 20.9,68.1 20.9,58.8L20.9,58.5C20.9,58.3 21.1,58.1 21.3,58.1L36,58.1C36.3,58.1 36.5,58.4 36.5,58.6C36.4,59.5 36.6,60.5 37,61.4C37.9,63.2 39.7,64.2 41.6,64.2L48.8,64.2L48.8,58.6L41.7,58.6C41.3,58.6 41.1,58.2 41.3,57.9C41.4,57.8 41.5,57.7 41.6,57.5C42.3,56.5 43.2,55.1 44.2,53.4C44.9,52.3 45.5,51 46,49.8C46.1,49.6 46.2,49.4 46.3,49.1C46.4,48.7 46.6,48.3 46.7,48C46.8,47.7 46.9,47.4 47,47.1C47.2,46.1 47.3,45 47.3,43.8C47.3,43.4 47.3,42.9 47.2,42.4C47.2,42.181 47.181,41.962 47.159,41.744L47.141,41.556C47.119,41.337 47.1,41.119 47.1,40.9C47.1,40.5 47,40 46.9,39.6C46.8,38.9 46.7,38.3 46.5,37.6L46.4,37.4C46.3,37 46.2,36.5 46,36.1C45.6,34.7 45.1,33.3 44.6,32.1C44.4,31.6 44.2,31.1 44,30.6C43.7,29.9 43.4,29.2 43.1,28.6C43,28.3 42.8,28.1 42.7,27.8C42.6,27.5 42.4,27.2 42.3,26.9C42.2,26.7 42.1,26.5 42,26.3L41.1,24.7C41,24.5 41.2,24.2 41.4,24.3L46.9,25.8L47.6,26L48.4,26.2L48.7,26.3L48.7,23C48.7,21.4 50,20.1 51.5,20.1C52.3,20.1 53,20.4 53.5,20.9C54,21.4 54.3,22.1 54.3,22.9L54.3,27.7L54.9,27.9C54.9,27.9 55,27.9 55,28C55.1,28.1 55.3,28.3 55.6,28.5C55.8,28.7 56,28.9 56.3,29.1C56.8,29.5 57.5,30.1 58.2,30.7C58.4,30.9 58.6,31 58.7,31.2C59.6,32 60.6,33 61.6,34.1C61.9,34.4 62.1,34.7 62.4,35C62.7,35.3 62.9,35.7 63.2,36C63.313,36.15 63.439,36.314 63.569,36.482ZM24.7,51.8L24.9,51.5L37.9,31.2C38.1,30.9 38.5,30.9 38.7,31.3C40.9,36.2 42.7,42.2 41.9,46C41.5,47.6 40.5,49.7 39.3,51.6C39.2,51.9 39,52.2 38.8,52.4C38.7,52.5 38.6,52.6 38.4,52.6L25,52.6C24.7,52.5 24.5,52.1 24.7,51.8Z"></path>
                </g>
              </g>
            </svg>
          </div>
        </a>
        <a class="link-button" target="_blank" href="https://etherscan.io/address/0x0bf9b0b110b8e0ae8e4ff66e770df5bab6ce52a6">
          <div>
            <svg fill="#FFFFFF" width="32" height="32" viewBox="0 0 293.775 293.671" xmlns="http://www.w3.org/2000/svg">
              <g id="etherscan-logo-circle" transform="translate(-219.378 -213.33)">
                <path d="M280.433,353.152A12.45,12.45,0,0,1,292.941,340.7l20.737.068a12.467,12.467,0,0,1,12.467,12.467v78.414c2.336-.692,5.332-1.43,8.614-2.2a10.389,10.389,0,0,0,8.009-10.11V322.073a12.469,12.469,0,0,1,12.468-12.47h20.778a12.469,12.469,0,0,1,12.467,12.467v90.279s5.2-2.106,10.269-4.245a10.408,10.408,0,0,0,6.353-9.577V290.9a12.466,12.466,0,0,1,12.466-12.467h20.778A12.468,12.468,0,0,1,450.815,290.9v88.625c18.014-13.055,36.271-28.758,50.759-47.639a20.926,20.926,0,0,0,3.185-19.537,146.6,146.6,0,0,0-136.644-99.006c-81.439-1.094-148.744,65.385-148.736,146.834a146.371,146.371,0,0,0,19.5,73.45,18.56,18.56,0,0,0,17.707,9.173c3.931-.346,8.825-.835,14.643-1.518a10.383,10.383,0,0,0,9.209-10.306V353.152" data-name="Path 1" id="Path_1"></path>
                <path d="M244.417,398.641A146.808,146.808,0,0,0,477.589,279.9c0-3.381-.157-6.724-.383-10.049-53.642,80-152.686,117.4-232.79,128.793" data-name="Path 2" id="Path_2" transform="translate(35.564 80.269)"></path>
              </g>
            </svg>
          </div>
        </a>
        <a class="link-button" target="_blank" href="https://twitter.com/Catsland01">
          <div>
            <svg fill="#FFFFFF" width="32" height="32" viewBox="0 0 18 16" xmlns="http://www.w3.org/2000/svg">
              <path d="M.09 13.791c1.992.14 3.728-.344 5.327-1.571-.816-.098-1.527-.311-2.127-.786-.584-.466-1.032-1.047-1.272-1.841h1.48c.008-.033.016-.066.024-.107-.816-.237-1.512-.663-2.032-1.342-.52-.67-.775-1.448-.8-2.3.52.148 1.016.295 1.52.434.016-.033.04-.065.056-.098-.72-.606-1.24-1.334-1.431-2.275a3.92 3.92 0 01.391-2.7c2 2.389 4.511 3.715 7.598 3.936-.096-.778-.104-1.498.16-2.202.912-2.463 3.983-3.249 5.894-1.481.216.196.4.229.632.147.632-.229 1.255-.474 1.903-.72-.248.81-.784 1.408-1.415 1.989.615-.164 1.231-.336 1.839-.5.024.025.048.041.072.066-.464.491-.912 1.007-1.415 1.449-.272.237-.36.458-.376.818-.144 4.01-1.752 7.25-5.175 9.289-3.487 2.07-7.077 1.947-10.612-.025-.064-.04-.12-.09-.24-.18z"></path>
            </svg>
          </div>
        </a>
      </div>
    </div>
    <div class="top" :style="{
      backgroundImage: `url(${bg})`
    }">
      <div style="width: 100%; min-height: 60rem; position: absolute; background: rgba(0, 0, 0, 0.5); z-index: 1;"></div>
      <div style="width: 100%; min-height: 60rem; z-index: 2;">
        <div class="top-tip">
          <div class="content">
            <div v-if="init" class="message" :style="{
              width: '16ch',
              animation: `typing 2s steps(16, end), blink-caret .5s step-end infinite alternate`
            }" @animationend="animationend(1)">
              Long long ago...
            </div>
            <div v-if="animationStep > 0" class="message" :style="{
              width: '33ch',
              animation: `typing 3s steps(33, end), blink-caret .5s step-end infinite alternate`
            }" @animationend="animationend(2)">
              There is a place called Catsland.
            </div>
            <div v-if="animationStep > 1" class="message" :style="{
              width: '33ch',
              animation: `typing 3s steps(33, end), blink-caret .5s step-end infinite alternate`
            }" @animationend="animationend(3)">
              There are many cats living there.
            </div>
            <!-- <div v-if="animationStep > 2" class="message" :style="{
              width: '53ch',
              animation: `typing 5s steps(53, end), blink-caret .5s step-end infinite alternate`
            }" @animationend="animationend(4)">
              Pastoral cats were the first inhabitants of the land.
            </div> -->
            <div v-if="animationStep > 2" class="message" :style="{
              width: '7ch',
              animation: `typing 2s steps(7, end) infinite alternate`
            }">
              ......
            </div>
          </div>
        </div>
        <div class="main">
          <div class="main-left">
            <div class="logo" :style="{
              backgroundImage: `url(${logo})`
            }"></div>
            <div class="progress">
            <a-progress
              :stroke-color="{
                '0%': '#108ee9',
                '100%': '#87d068',
              }"
              status="active"
              :showInfo="false"
              :percent="(currentMint / totalSupply) * 100"
            />
            </div>
            <div class="buttons">
              <a-button type="primary" size="large" block :disabled="provider === undefined" @click="freeMints">
                FREE MINTS
              </a-button>
            </div>
          </div>
          <div class="main-right">
            <div class="coin" :style="{
              backgroundImage: `url(${coin})`
            }"></div>
            <div class="tip">
              GET DFC TOKENS
            </div>
            <div class="buttons">
              <a-button type="primary" size="large" block :disabled="provider === undefined || currentMint !== totalSupply">
                {{ currentMint !== totalSupply ? 'UNOPENED' : 'GET' }}
              </a-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="description description-1">
        <div class="content">
          <div class="cover" :style="{
            backgroundImage: `url(${cover})`
          }"></div>
          <div class="text">
            <div class="title">
              What is the Pastoral Cats?!
            </div>
            <div class="message">
              Pastoral Cats is a collection of 10,000 PFPs based on Chinese native cats. Each one is unique. What's more, each Pastoral Cats is a proof of entry into Castland.
            </div>
          </div>
        </div>
      </div>
      <div class="description description-2" :style="{
        height: '15rem'
      }">
        <div class="content">
          <div class="text" :style="{
            float: 'left',
            width: '100%',
            padding: '0'
          }">
            <div class="title">
              How to get Pastoral Cats?!
            </div>
            <div class="message" :style="{
              fontSize: '1rem'
            }">
              <div>
                No. 2001-10000 are free mint, each address can mint 5 tokens.
              </div>
              <div>
                No. 1001-2000 will be open for sale after the free mint is completed, and used to prepare for the subsequent issuance of DFC tokens.
              </div>
              <div>
                No. 1-1000 will be donated to stray cat rescue organizations after all sales are completed.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="description description-3" :style="{
        height: '16rem'
      }">
        <div class="content">
          <div class="text" :style="{
            float: 'left',
            width: '100%',
            padding: '0'
          }">
            <div class="title">
               What is the DFC Tokens?!
            </div>
            <div class="message" :style="{
              fontSize: '1rem'
            }">
              DFC Tokens is the currency used by Catsland, with a total amount of 1,000,000,000, 
              of which 50% goes to the Vitalik Buterin's address, 25% is locked in the smart contract and the key is destroyed, 
              and the remaining 25% will be minted after all Pastoral Cats are minted. Open for claim , 
              each address with Pastoral Cats will receive 25,000 DFC tokens, and more importantly, DFC tokens will be listed on Uniswap.
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="content">
        <div class="copy">© 2022 CATSLAND</div>
        <div class="join">
          <a href="mailto:catsland.project@gmail.com">🥳 CONTACT US</a>
        </div>
      </div>
    </div>
    <a-modal class="mint-dialog" v-model="showMint" title="FREE MINTS" :footer="null" :maskClosable="false" :keyboard="false" centered width="35rem" :bodyStyle="{
      width: '100%'
    }">
      <template slot="closeIcon">X</template>
      <div class="mint-account">
        ADDRESS: {{ account }}
      </div>
      <div class="mint-num">
        <span v-for="item of canMintCount" :key="item" :class="mintCount === item ? 'active' : ''" @click="selectMintCount(item)">{{ item }}</span>
        <span v-if="canMintCount === 0" class="mint-tip">ONE ADDRESS ONLY CAN MINT 5 TOKENS</span>
      </div>
      <div>
        <a-button type="dashed" size="large" block :disabled="provider === undefined || canMintCount <= 0" :loading="loading" @click="mint">
          MINT
        </a-button>
      </div>
    </a-modal>
  </div>
</template>

<script>
import * as ethers from 'ethers'

export default {
  name: 'Index',
  data () {
    return {
      init: false,
      animationStep: 0,
      offsetTop: 0,
      offsetLeft: 0,
      address: '0x0Bf9B0b110B8e0AE8E4Ff66E770df5baB6CE52a6',
      provider: undefined,
      account: undefined,
      contract: undefined,
      currentMint: 0,
      totalSupply: 10000,
      mintCount: 5,
      canMintCount: 5,
      showMint: false,
      loading: false,
      bg: require('@/assets/images/bg.png'),
      logo: require('@/assets/images/logo.gif'),
      coin: require('@/assets/images/coin.png'),
      cover: require('@/assets/images/cover.png')
    }
  },
  async mounted () {
    document.onscroll = () => {
      if (window.pageYOffset !== undefined) {
        this.offsetTop = window.pageYOffset
        this.offsetLeft = window.pageXOffset
      } else {
        this.offsetTop = document.body.scrollLeft + document.documentElement.scrollLeft
        this.offsetLeft = document.body.scrollTop + document.documentElement.scrollTop
      }
    }

    try {
      this.provider = new ethers.providers.Web3Provider(window.ethereum, 1)
      const mintLogs = await this.provider.getLogs({
        address: this.address,
        topics: ['0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef'],
        fromBlock: 0,
        toBlock: 'latest'
      })
      this.currentMint = mintLogs.length

      this.contract = new ethers.Contract(this.address, [
        {
          inputs: [
            {
              internalType: 'address',
              name: '',
              type: 'address'
            }
          ],
          name: 'freeMintCount',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'amount',
              type: 'uint256'
            },
            {
              internalType: 'address',
              name: 'recipient',
              type: 'address'
            }
          ],
          name: 'freeMints',
          outputs: [],
          stateMutability: 'nonpayable',
          type: 'function'
        }
      ], this.provider.getSigner())
    } catch (error) {
      this.$notification.error({
        duration: null,
        message: 'INIT ERROR',
        description: error.message,
        closeIcon: () => 'X'
      })
      this.downLoadMetaMask()
    }
    setTimeout(() => {
      this.init = true
    }, 500)
  },
  methods: {
    animationend (step) {
      this.animationStep = step
    },
    downLoadMetaMask () {
      window.open('https://metamask.io/download/')
    },
    freeMints () {
      if (this.provider) {
        this.provider.send('eth_requestAccounts', []).then(accounts => {
          if (accounts.length > 0) {
            this.account = accounts[0]
            this.contract.freeMintCount(this.account).then(count => {
              this.canMintCount = 5 - count.toNumber()
              this.mintCount = this.canMintCount
              this.showMint = true
            }).catch(error => {
              this.$notification.error({
                duration: null,
                message: 'INIT ERROR',
                description: error.message,
                closeIcon: () => 'X'
              })
            })
          } else {
            this.$notification.error({
              duration: null,
              message: 'CONNECT ERROR',
              description: error.message,
              closeIcon: () => 'X'
            })
          }
        }).catch(error => {
          this.$notification.error({
            duration: null,
            message: 'CONNECT ERROR',
            description: error.message,
            closeIcon: () => 'X'
          })
        })
      } else {
        this.downLoadMetaMask()
      }
    },
    selectMintCount (mintCount) {
      if (this.loading) {
        return
      }
      this.mintCount = mintCount
    },
    async mint () {
      this.loading = true
      this.contract.freeMints(this.mintCount, this.account).then(() => {
        this.showMint = false
        this.loading = false
        this.$notification.success({
          duration: null,
          message: 'MINT SUCCESS',
          description: '🥳🥳🥳🎉🎉🎉✨✨✨',
          closeIcon: () => 'X'
        })
      }).catch(error => {
        this.showMint = false
        this.loading = false
        this.$notification.error({
          duration: null,
          message: 'MINT ERROR',
          description: error.message,
          closeIcon: () => 'X'
        })
      })
    }
  }
}
</script>
