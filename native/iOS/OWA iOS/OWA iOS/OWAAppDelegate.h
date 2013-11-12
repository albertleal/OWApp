//
//  OWAAppDelegate.h
//  OWA iOS
//
//  Created by Albert Leal Gibert on 12/11/13.
//  Copyright (c) 2013 Albert Leal Gibert. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface OWAAppDelegate : UIResponder <UIApplicationDelegate>

@property (strong, nonatomic) UIWindow *window;

@property (readonly, strong, nonatomic) NSManagedObjectContext *managedObjectContext;
@property (readonly, strong, nonatomic) NSManagedObjectModel *managedObjectModel;
@property (readonly, strong, nonatomic) NSPersistentStoreCoordinator *persistentStoreCoordinator;

- (void)saveContext;
- (NSURL *)applicationDocumentsDirectory;

@end
