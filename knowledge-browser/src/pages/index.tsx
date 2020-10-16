import React, { useReducer } from 'react'
import Layout from '../components/layout'
import styles from '../../styles/Home.module.css'

type ContainerProps = unknown

type Props = {
  count: number
  counter: (CounterAction) => void
} & ContainerProps

type Count = { count: number }
const CalcType = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT'
} as const
type CounterAction = { type: typeof CalcType[keyof typeof CalcType] }

const Component: React.FC<Props> = props => {
  // Component内では渡されたpropsを使うだけ
  return (
    <Layout>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Counter!!
          </h1>

          <div className={styles.grid}>
            <div>
              <button className={styles.card} onClick={() => props.counter({ type: CalcType.DECREMENT })}>
                <p>minus</p>
              </button>
              <button className={styles.card} onClick={() => props.counter({ type: CalcType.INCREMENT })}>
                <p>plus</p>
              </button>
            </div>
          </div>
          <div>
            count is {props.count}
          </div>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
          </a>
        </footer>
      </div>
    </Layout>
  )
}

const Container: React.FC<ContainerProps> = props => {
  // 値の取得や、整形、stateの生成などのロジックをContainer内に閉じ込められる

  const initialState: Count = { count: 0 }
  const reducer = (state: Count, action: CounterAction): Count => {
    switch (action.type) {
      case 'INCREMENT':
        return { count: state.count + 1 }
      case 'DECREMENT':
        return { count : state.count - 1 }
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  return <Component count={state.count} counter={dispatch} />
}

Container.displayName = 'Home'

export default Container
