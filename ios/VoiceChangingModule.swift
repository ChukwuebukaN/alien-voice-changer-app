//
//  VoiceChangingModule.swift
//  AlienVoiceChanger
//
//  Created by Frenzy Nwoba on 12/20/23.
//

import Foundation

@objc(VoiceChangingModule)
class VoiceChangingModule: NSObject {
  
  private var count = 0;
  
  @objc
  func() {
    count += 1;
    print(count)
  }
}
