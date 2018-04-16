import { fetchData, fetchDataPromise } from './async';

describe('async testing', () => {
  test('async function: callback function', done => {
    function callback(data) {
      const { title } = data;
      expect(title).toMatch('Jest');
  
      // 使用 `done` 来标记expect函数的结束
      done();
    }
  
    fetchData(callback);
  });
  
  test('async function: Promise.then() / Promise.catch()', () => {
    // 针对异步函数返回的Promise，在`then`或`catch`里写expect表达式
    fetchDataPromise().then(data => {
      const { title } = data;
  
      expect(title).toMatch('Jest');
    });
  });
  
  test('async function: expect resolves/reject', () => {
    // 问题：如果想判断resolves里的某个属性值，怎么写？
    // 回答：先在Promise里处理好需要回调的数据
    expect(fetchDataPromise().then(res => res.title)).resolves.toMatch('Jest');
  });
  
  test('async function: await/async', async () => {
    // 问题：如果想判断resolves里的某个属性值，怎么写？
  
    const result = await fetchDataPromise();
    const { title } = result;
    
    expect(title).toMatch('Jest');
  });
});
