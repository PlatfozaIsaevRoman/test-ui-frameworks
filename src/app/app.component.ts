import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'test-ui-frameworks';
  public frameworksNames = ['/dev-extreme', '/prime-ng']

  constructor(){}

  ngOnInit(): void {
    // this.testWS()
    console.log(123123)
  }
  public testWS(){
    let socket = new WebSocket("wss://javascript.info/article/websocket/demo/hello");

    socket.onopen = function(e) {
      alert("[open] Connection established");
      alert("Sending to server");
      socket.send("My name is John");
    };

    socket.onmessage = function(event) {
      alert(`[message] Data received from server: ${event.data}`);
    };

    socket.onclose = function(event) {
      if (event.wasClean) {
        alert(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
      } else {
        // e.g. server process killed or network down
        // event.code is usually 1006 in this case
        alert('[close] Connection died');
      }
    };

    socket.onerror = function(error: any) {
      alert(`[error] ${error.message}`);
    };
  }
}
