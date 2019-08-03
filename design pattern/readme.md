# 옵저버 패턴(Observer Pattern)

https://ko.wikipedia.org/wiki/%EC%98%B5%EC%84%9C%EB%B2%84_%ED%8C%A8%ED%84%B4

> 옵서버 패턴(observer pattern)은 객체의 상태 변화를 관찰하는 관찰자들, 즉 옵저버들의 목록을 객체에 등록하여 상태 변화가 있을 때마다 메서드 등을 통해 객체가 직접 목록의 각 옵저버에게 통지하도록 하는 디자인 패턴이다. 주로 분산 이벤트 핸들링 시스템을 구현하는 데 사용된다. 발행/구독 모델로 알려져 있기도 하다.

[디자인패턴 - 옵저버 패턴(Observer Pattern)](https://flowarc.tistory.com/entry/%EB%94%94%EC%9E%90%EC%9D%B8-%ED%8C%A8%ED%84%B4-%EC%98%B5%EC%A0%80%EB%B2%84-%ED%8C%A8%ED%84%B4Observer-Pattern?category=562154)

> 옵저버 패턴은 한 객체의 상태가 바뀌면 그 객체에 의존하는 다른 객체들에게 연락이 가고 자동으로 정보가 갱신되는 1:N 의 관계를 정의한다. 연결은 인터페이스를 이용하여 느슨한 결합성을 유지한다. 주체, 옵저버 인터페이스를 적용한다. 옵저버 패턴은 푸시 방식과 풀 방식으로 언제든지 구현할 수 있다. JAVA에서 기본으로 Observable 클래스와 Observer 인터페이스를 제공한다. Swing, Android 등에서 UI관련된 곳에서 이 옵저버 패턴이 많이 사용된다. (물론 이보다 더 많다)

# 이터레이터 패턴 (iterator pattern)

https://ko.wikipedia.org/wiki/%EB%B0%98%EB%B3%B5%EC%9E%90_%ED%8C%A8%ED%84%B4

> 반복자 패턴(iterator pattern)은 객체 지향 프로그래밍에서 반복자를 사용하여 컨테이너를 가로지르며 컨테이너의 요소들에 접근하는 디자인 패턴이다. 반복자 패턴은 컨테이너로부터 알고리즘을 분리시키며, 일부의 경우 알고리즘들은 필수적으로 컨테이너에 특화되어 있기 때문에 분리가 불가능하다.

> 이를테면, SearchForElement라는 가설적 알고리즘은 일반적으로 컨테이너에 특화된 알고리즘으로서 구현하지 않고 반복자 유형을 사용하여 구현할 수 있다. 이는 필요한 반복자 유형을 지원하는 컨테이너에 SearchForElement를 사용할 수 있게 한다.

[이터레이터 패턴 (iterator pattern)]https://jusungpark.tistory.com/25
