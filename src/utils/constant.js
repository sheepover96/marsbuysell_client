import VastitasBorealis from '../static/lands/vastitas_borealis.jpg'
import HellasPlanitia from '../static/lands/hellas_planitia.jpg'
import NoachisTerra from '../static/lands/noachis_terra.jpg'
import ArabiaTera from '../static/lands/arabia-tera.jpg'

import SyrtisMajor from '../static/lands/syrtis_major.jpg'
import UtopiaPlanitia from '../static/lands/utopia_planitia.jpg'
import ElysiumMons from '../static/lands/elysium_mons.jpg'
import TyrrhenaTerra from '../static/lands/tyrrhena_terra.jpg'
import ElysiumPlanitia from '../static/lands/elysium_planitia.jpg'
import HesperiaPlanum from '../static/lands/hesperia_planum.jpg'

export const MARS_LAND_LIST = {
  1: {
    name: 'ヴァスティタス・ボレアリス',
    address: '火星1-1-1',
    price: 10000,
    description: '火星の北極に位置する氷河地形。氷河の下には水が眠っていると言われています。\n漁業収穫量が多くなることが予想されるので、漁師として財を成したい方におすすめです。',
    image: VastitasBorealis,
  },
  2: {
    name: 'アラビア・テラ',
    address: '火星1-1-1',
    price: 10000,
    description: '太陽系最大の衝突盆地',
    image: ArabiaTera,
  },
  3: {
    name: 'シルティス・メジャー山',
    address: '火星1-1-1',
    price: 10000,
    description: '楯状火山\n砂が少なく、玄武岩質の火山岩がむき出しなので黒い。\n★地盤はしっかりしてるから開発向き？',
    image: SyrtisMajor,
  },
  4: {
    name: 'ユートピア平原',
    address: '火星1-1-1',
    price: 10000,
    description: '岩が多く、開発が大変そう\n永久凍土の劣化による地面のくぼみ、スカラップ地形\n★住みにくそう。。',
    image: UtopiaPlanitia,
  },
  5: {
    name: 'エリジウム山',
    address: '火星1-1-1',
    price: 10000,
    description: '火星で２番目に大きな火山',
    image: ElysiumMons,
  },
  6: {
    name: 'ティレナ・テラ',
    address: '火星1-1-1',
    price: 10000,
    description: '赤道の南にある広い地域。\nクレーターの多い高地やその他の険しい地形あり。\n火星で最も古い火山、ティレナパテラ火山がある\nハーシェルクレーター\nバルガン砂丘\n★住みにくそうだけど、観光地沢山、人気ありそう',
    image: TyrrhenaTerra,
  },
  7: {
    name: 'エリジウム平原',
    address: '火星1-1-1',
    price: 10000,
    description: 'エリジウム山の南に位置する。\n現在から2万年以内の溶岩流が発見された地域がある(ケルベロス・フォッセ)\n火山、クレーターや川の谷あり\n★火星で一番直近で火山活動が確認されているため危険？',
    image: ElysiumPlanitia
  },
  8: {
    name: 'ノアキス・テラ',
    address: '火星1-1-1',
    price: 10000,
    description: '広大な南の陸地\n線状の砂丘がある\n★線状を活かす？農業？',
    image: NoachisTerra,
  },
  9: {
    name: 'ヘラス平原',
    address: '火星1-1-1',
    price: 10000,
    description: '巨大な円形のクレーター、太陽系で３または４番目に大きい\nユートピア平原と同じくらいの大きさ',
    image: HellasPlanitia,
  },
  10: {
    name: 'へスペリア平原',
    address: '火星1-1-1',
    price: 10000,
    description: '広い溶岩平原。平野には滑らかで平らな浅いクレーターが豊富\n湿地もあり',
    image: HesperiaPlanum
  },
}
