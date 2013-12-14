//
//  OWAPPViewController.m
//  OWAPPContent
//
//  Created by Albert Leal Gibert on 09/12/13.
//  Copyright (c) 2013 Albert Leal Gibert. All rights reserved.
//

#import "OWAPPViewController.h"

@interface OWAPPViewController ()

@end

@implementation OWAPPViewController

- (void)viewDidLoad
{
    [super viewDidLoad];
	// Do any additional setup after loading the view, typically from a nib.
    NSString *stringURL = [NSString stringWithFormat:@"http://albertleal.com/apps/owapp/test/index.html"];
    
    //stringURL = [NSString stringWithFormat:@"http://192.168.1.100:8888/test/index.html"];
    
    
    NSURL *url = [NSURL URLWithString:stringURL];
    
    //Should delete when HTML manifest is ready
    [[NSURLCache sharedURLCache] removeAllCachedResponses];
    
    NSURLRequest *request = [NSURLRequest requestWithURL:url];
    self.webView.scrollView.bounces = NO;
    [self.webView loadRequest:request];
    
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

@end
