//
//  OWAPPViewController.h
//  OWAPPContent
//
//  Created by Albert Leal Gibert on 09/12/13.
//  Copyright (c) 2013 Albert Leal Gibert. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface OWAPPViewController : UIViewController

@property (weak, nonatomic) IBOutlet UIWebView *webView;
@property (nonatomic, strong) NSString *searchField;

@end
