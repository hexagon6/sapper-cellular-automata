import test from 'ava'
import { naiveNB, countCells, neighborIn } from '../modules/'

test('directions', t => {
  const nb2 = neighborIn(2, 2)
  const nb3 = neighborIn(3, 3)
  const left2 = nb2.left
  const left3 = nb3.left
  const right2 = nb2.right
  const right3 = nb3.right
  const up2 = nb2.up
  const up3 = nb3.up
  const down2 = nb2.down
  const down3 = nb3.down

  t.is(left2(1), 0)
  t.is(left2(0), 1)
  t.is(left3(0), 2)

  t.is(right2(1), 0)
  t.is(right2(0), 1)
  t.is(right3(0), 1)

  t.is(up2(0), 1)
  t.is(up2(1), 0)
  t.is(up3(0), 2)

  t.is(down2(0), 1)
  t.is(down2(1), 0)
  t.is(down3(2), 0)
})

test('moore in 2x2', t => {
  const { moore } = neighborIn(2, 2)
  const NB = moore(0, 0)
  t.false(NB('0x0'))
  t.true(NB('0x1'))
  t.true(NB('1x0'))
  t.true(NB('1x1'))
})

test('moore in 3x3', t => {
  const { moore } = neighborIn(3, 3)
  const NB = moore(1, 1)
  // 8 of 9 cells
  t.true(NB('0x0'))
  t.true(NB('0x1'))
  t.true(NB('0x2'))
  t.true(NB('1x0'))
  t.false(NB('1x1'))
  t.true(NB('1x2'))
  t.true(NB('2x0'))
  t.true(NB('2x1'))
  t.true(NB('2x2'))
})

test('count neighbours with condition', t => {
  const { moore } = neighborIn(2, 2)
  t.is(
    countCells('0x0')(
      {
        '0x0': 0,
        '1x0': 0,
        '0x1': 0,
        '1x1': 0,
      },
      v => v === 0,
      moore
    ),
    3
  )
})

test.todo('get neighbors')
