import { TestBed } from '@angular/core/testing';

import { UtilityService } from './utility.service';

describe('UtilityService', () => {
  let service: UtilityService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = new UtilityService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('createsquare should return array with length 9', function() {
    // const service: UtilityService = TestBed.get(UtilityService);
    expect(service.createSquares().length).toEqual(9); // true
  });

  it('play again should modify li elements style properties', function() {
    const liArr = [];
    const liElem1 = document.createElement('li');
    liArr.push(liElem1);
    const liElem2 = document.createElement('li');
    liArr.push(liElem2);

    // const service: UtilityService = TestBed.get(UtilityService);
    service.playAgain(liArr);
    expect(liArr[0].style.background).toEqual('none'); // true
    expect(liArr[0].innerHTML).toEqual(''); // true
  });
});
