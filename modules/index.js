import hexagonal from './shapes/hexagon'
import rectangular from './shapes/rectangular'

import GameofLifeDefault from './stores/gameoflife'
import WavesDefault from './stores/waves'

import { getKeys, listToDict, dictToList } from './field/utils'
import { neighborIn } from './field/rectangular/neighborhood'

import { genHSLAColor } from './colors/hsla'

import { increase, mapIterator } from './utils/mapiterator'
import { timer } from './utils/timer'

const algorithm = () => 0
const naive = (field, states) =>
  field.map(cell =>
    Object.assign({}, cell, {
      v: (cell.v + 1) % states,
    })
  )

const fieldGen = type => {
  const _default = 'rectangular'
  const generators = {
    hexagonal: hexagonal.field,
    rectangular: rectangular.field,
  }
  return type in generators ? generators[type] : generators[_default]
}

const countCells = cellKey => (cells, condition, neighborhood) => {
  const [X, Y] = getKeys(cellKey)
  const NB = neighborhood ? neighborhood(X, Y) : false
  return Object.entries(cells)
    .filter(
      ([k, v]) =>
        (k !== cellKey && // not cell itself
          !NB) ||
        (NB(k) && // if neighborhood is undefined, include all other cells
          condition(v))
    )
    .reduce((a, c) => a + 1, 0)
}

const initializer = (n, i) => n % i
const randomInitializer = (n, i) => Math.floor(Math.random() * n) % i

export {
  algorithm,
  hexagonal,
  increase,
  mapIterator,
  timer,
  rectangular,
  GameofLifeDefault,
  WavesDefault,
  fieldGen,
  initializer,
  randomInitializer,
  naive,
  listToDict,
  dictToList,
  countCells,
  neighborIn,
  genHSLAColor,
}
