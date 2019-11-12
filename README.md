# lodash v4.17.15

The [Lodash](https://lodash.com/) library exported as [Node.js](https://nodejs.org/) modules.

# 源码分析

## 文件结构

``` bash
├── LICENSE
├── README.md
├── _DataView.js
├── _Hash.js - hash对象的构造函数
├── _LazyWrapper.js - LazyWrapper的构造函数，继承自_baseLodash.js的空函数
├── _ListCache.js - ListCache对象的构造函数
├── _LodashWrapper.js - LodashWrapper的构造函数，继承自_baseLodash.js的空函数
├── _Map.js - 获取root的Map
├── _MapCache.js - 基于hash、map、string的综合cache构造函数
├── _Promise.js
├── _Set.js
├── _SetCache.js
├── _Stack.js
├── _Symbol.js - root上的Symbol对象
├── _Uint8Array.js
├── _WeakMap.js - 获取_root.js上的WeakMap对象
├── _apply.js - 给传入函数apply指定作用域
├── _arrayAggregator.js
├── _arrayEach.js
├── _arrayEachRight.js
├── _arrayEvery.js
├── _arrayFilter.js
├── _arrayIncludes.js - 判断是否存在于数组中，通过baseIndexOf判断索引和-1
├── _arrayIncludesWith.js - 自定义comparator判断数组内是否存在数据
├── _arrayLikeKeys.js
├── _arrayMap.js - 通过自定义iteratee遍历array
├── _arrayPush.js - 将内容列表push到数组后
├── _arrayReduce.js
├── _arrayReduceRight.js
├── _arraySample.js
├── _arraySampleSize.js
├── _arrayShuffle.js
├── _arraySome.js
├── _asciiSize.js
├── _asciiToArray.js
├── _asciiWords.js
├── _assignMergeValue.js
├── _assignValue.js
├── _assocIndexOf.js
├── _baseAggregator.js
├── _baseAssign.js
├── _baseAssignIn.js
├── _baseAssignValue.js
├── _baseAt.js
├── _baseClamp.js
├── _baseClone.js
├── _baseConforms.js
├── _baseConformsTo.js
├── _baseCreate.js - 暴露创建对象方法，基于Object.create，没有则通过new来兼容。
├── _baseDelay.js
├── _baseDifference.js - 判断不相等内容，兼容自定义迭代器，比较方法和大数组走缓存
├── _baseEach.js
├── _baseEachRight.js
├── _baseEvery.js
├── _baseExtremum.js
├── _baseFill.js
├── _baseFilter.js
├── _baseFindIndex.js - 基础的查找索引，自定义查询函数
├── _baseFindKey.js
├── _baseFlatten.js - 递归展开数组，基于isFlattenable判断展开性，通过arrayPush添加到返回值
├── _baseFor.js
├── _baseForOwn.js
├── _baseForOwnRight.js
├── _baseForRight.js
├── _baseFunctions.js
├── _baseGet.js
├── _baseGetAllKeys.js
├── _baseGetTag.js - 返回Object.toString的值
├── _baseGt.js
├── _baseHas.js
├── _baseHasIn.js
├── _baseInRange.js
├── _baseIndexOf.js - 取出索引，普通情况基于strictIndexOf，NaN情况基于baseFindIndex
├── _baseIndexOfWith.js
├── _baseIntersection.js
├── _baseInverter.js
├── _baseInvoke.js
├── _baseIsArguments.js - 判断是否是arguments，通过object.toString和[object Arguments]比较
├── _baseIsArrayBuffer.js
├── _baseIsDate.js
├── _baseIsEqual.js
├── _baseIsEqualDeep.js
├── _baseIsMap.js
├── _baseIsMatch.js
├── _baseIsNaN.js - 判断是否NaN，通过NaN!==NaN
├── _baseIsNative.js - 判断是否是原生方法，通过toSource拿到源码进行正则判断，规避掉masked的一些方法
├── _baseIsRegExp.js
├── _baseIsSet.js
├── _baseIsTypedArray.js
├── _baseIteratee.js
├── _baseKeys.js
├── _baseKeysIn.js
├── _baseLodash.js - 一个空函数，供其他wrapper去继承用
├── _baseLt.js
├── _baseMap.js
├── _baseMatches.js
├── _baseMatchesProperty.js
├── _baseMean.js
├── _baseMerge.js
├── _baseMergeDeep.js
├── _baseNth.js
├── _baseOrderBy.js
├── _basePick.js
├── _basePickBy.js
├── _baseProperty.js
├── _basePropertyDeep.js
├── _basePropertyOf.js
├── _basePullAll.js
├── _basePullAt.js
├── _baseRandom.js
├── _baseRange.js
├── _baseReduce.js
├── _baseRepeat.js
├── _baseRest.js
├── _baseSample.js
├── _baseSampleSize.js
├── _baseSet.js
├── _baseSetData.js - 兼容weakMap，如果没有则基于identity.js，返回第一个值；如果有则使用_metaMap.js设置值。
├── _baseSetToString.js
├── _baseShuffle.js
├── _baseSlice.js - 类似slice，但是数组是入参而不是自调用
├── _baseSome.js
├── _baseSortBy.js
├── _baseSortedIndex.js
├── _baseSortedIndexBy.js
├── _baseSortedUniq.js - 通过判断上一个和当前是否相等，相等则不加入返回列表，来去重有序数组
├── _baseSum.js
├── _baseTimes.js
├── _baseToNumber.js - 转成数字类型，通过+value。
├── _baseToPairs.js
├── _baseToString.js - 转成字符串类型，通过+''的方式。
├── _baseUnary.js - 对一个函数进行闭包处理。将传入的函数，通过函数返回出去
├── _baseUniq.js
├── _baseUnset.js
├── _baseUpdate.js
├── _baseValues.js
├── _baseWhile.js
├── _baseWrapperValue.js
├── _baseXor.js
├── _baseZipObject.js
├── _cacheHas.js - 判断cache是否有key
├── _castArrayLikeObject.js
├── _castFunction.js
├── _castPath.js
├── _castRest.js
├── _castSlice.js
├── _charsEndIndex.js
├── _charsStartIndex.js
├── _cloneArrayBuffer.js
├── _cloneBuffer.js
├── _cloneDataView.js
├── _cloneRegExp.js
├── _cloneSymbol.js
├── _cloneTypedArray.js
├── _compareAscending.js
├── _compareMultiple.js
├── _composeArgs.js - 合并传入的两个数组为一个
├── _composeArgsRight.js - 合并传入的两个数组为一个，顺序和_composeArgs.js相反
├── _copyArray.js - 拷贝数组，通过遍历赋值
├── _copyObject.js
├── _copySymbols.js
├── _copySymbolsIn.js
├── _coreJsData.js - 用来获取root.__core-js_shared__
├── _countHolders.js - 计算元素在数组中出现的次数
├── _createAggregator.js
├── _createAssigner.js
├── _createBaseEach.js
├── _createBaseFor.js
├── _createBind.js - 给传入的函数绑定指定作用域
├── _createCaseFirst.js
├── _createCompounder.js
├── _createCtor.js - 通过new 创建传入的对象实例。基于_baseCreate.js创建对象
├── _createCurry.js
├── _createFind.js
├── _createFlow.js
├── _createHybrid.js
├── _createInverter.js
├── _createMathOperation.js - 数学运算参数只要有字符串类型，则都转成字符串，调用回调的运算方法。
├── _createOver.js
├── _createPadding.js
├── _createPartial.js
├── _createRange.js
├── _createRecurry.js
├── _createRelationalOperation.js
├── _createRound.js - type为外界传入，递归使用Math[type]，从而兼容小数的情况
├── _createSet.js
├── _createToPairs.js
├── _createWrap.js
├── _customDefaultsAssignIn.js
├── _customDefaultsMerge.js
├── _customOmitClone.js
├── _deburrLetter.js
├── _defineProperty.js
├── _equalArrays.js
├── _equalByTag.js
├── _equalObjects.js
├── _escapeHtmlChar.js
├── _escapeStringChar.js
├── _flatRest.js
├── _freeGlobal.js - 取出node的global
├── _getAllKeys.js
├── _getAllKeysIn.js
├── _getData.js - 基于_metaMap.js取指定key。否则返回noop.js的空函数。
├── _getFuncName.js - 取函数名称，基于func.name
├── _getHolder.js
├── _getMapData.js - 通过key拿到map实例（hash、map、string）
├── _getMatchData.js
├── _getNative.js - 获取object自身的key
├── _getPrototype.js
├── _getRawTag.js
├── _getSymbols.js
├── _getSymbolsIn.js
├── _getTag.js
├── _getValue.js - 获取obj的key，规避null
├── _getView.js
├── _getWrapDetails.js
├── _hasPath.js
├── _hasUnicode.js
├── _hasUnicodeWord.js
├── _hashClear.js - 清空初始化hash
├── _hashDelete.js - 删除hash对应key的值
├── _hashGet.js - 通过object.hasOwnProperty来判断是否有key，并返回对应key的值
├── _hashHas.js - 通过object.hasOwnProperty来判断是否有key
├── _hashSet.js - 设置值
├── _initCloneArray.js
├── _initCloneByTag.js
├── _initCloneObject.js
├── _insertWrapDetails.js
├── _isFlattenable.js - 判断是否可展开，数组、argument、symbol均可
├── _isIndex.js - 判断是否可以用作索引，基于数字范围和正则
├── _isIterateeCall.js - 判断是否是迭代器
├── _isKey.js
├── _isKeyable.js - 判断是否可作为key，typeof为string、number、symbol、boolean均可
├── _isLaziable.js
├── _isMaskable.js
├── _isMasked.js - 判断函数是否被标记了，标记来自_coreJsData
├── _isPrototype.js
├── _isStrictComparable.js
├── _iteratorToArray.js
├── _lazyClone.js
├── _lazyReverse.js
├── _lazyValue.js
├── _listCacheClear.js - 初始化清空listcache
├── _listCacheDelete.js - 删除listcache中指定value
├── _listCacheGet.js - 获取listcache中值
├── _listCacheHas.js - 判断listcache中值
├── _listCacheSet.js - 设置listcache中值
├── _mapCacheClear.js - 初始化清空
├── _mapCacheDelete.js - 删除
├── _mapCacheGet.js - 获取
├── _mapCacheHas.js - 判断存在
├── _mapCacheSet.js - 设置
├── _mapToArray.js
├── _matchesStrictComparable.js
├── _memoizeCapped.js
├── _mergeData.js
├── _metaMap.js - 返回_WeakMap.js的WeakMap对象
├── _nativeCreate.js - 获取原生的Object.create
├── _nativeKeys.js
├── _nativeKeysIn.js
├── _nodeUtil.js
├── _objectToString.js - 包装Object.toString
├── _overArg.js
├── _overRest.js
├── _parent.js
├── _reEscape.js
├── _reEvaluate.js
├── _reInterpolate.js
├── _realNames.js - 返回空对象
├── _reorder.js
├── _replaceHolders.js
├── _root.js - 建立引用到freeGlobal
├── _safeGet.js
├── _setCacheAdd.js
├── _setCacheHas.js
├── _setData.js
├── _setToArray.js
├── _setToPairs.js
├── _setToString.js
├── _setWrapToString.js
├── _shortOut.js
├── _shuffleSelf.js
├── _stackClear.js
├── _stackDelete.js
├── _stackGet.js
├── _stackHas.js
├── _stackSet.js
├── _strictIndexOf.js - 遍历判断索引，通过===
├── _strictLastIndexOf.js
├── _stringSize.js
├── _stringToArray.js
├── _stringToPath.js
├── _toKey.js
├── _toSource.js - 获取函数源码
├── _unescapeHtmlChar.js
├── _unicodeSize.js
├── _unicodeToArray.js
├── _unicodeWords.js
├── _updateWrapDetails.js
├── _wrapperClone.js - 深拷贝一个wrapper，针对__actions__使用_copyArray.js拷贝数组，new一个LodashWrapper.js。
├── add.js - 调用_createMathOperation，回调为简单的+运算。
├── after.js
├── array.js
├── ary.js
├── assign.js
├── assignIn.js
├── assignInWith.js
├── assignWith.js
├── at.js
├── attempt.js
├── before.js
├── bind.js
├── bindAll.js
├── bindKey.js
├── camelCase.js
├── capitalize.js
├── castArray.js
├── ceil.js
├── chain.js
├── chunk.js - 调用baseSlice对数组进行切割，返回二维数组
├── clamp.js
├── clone.js
├── cloneDeep.js
├── cloneDeepWith.js
├── cloneWith.js
├── collection.js
├── commit.js
├── compact.js - 选出所有truty的数组元素，通过原生的if隐式转换判断
├── concat.js - 拼接数组，支持多维。通过arrayPush拼接，通过baseFlatten来扁平
├── cond.js
├── conforms.js
├── conformsTo.js
├── constant.js
├── core.js
├── core.min.js
├── countBy.js
├── create.js
├── curry.js
├── curryRight.js
├── date.js
├── debounce.js
├── deburr.js
├── defaultTo.js
├── defaults.js
├── defaultsDeep.js
├── defer.js
├── delay.js
├── difference.js
├── differenceBy.js
├── differenceWith.js
├── divide.js - 调用_createMathOperation，回调为简单的/运算。
├── drop.js
├── dropRight.js
├── dropRightWhile.js
├── dropWhile.js
├── each.js
├── eachRight.js
├── endsWith.js
├── entries.js
├── entriesIn.js
├── eq.js - 判断是否相关，兼容NaN相等的情况
├── escape.js
├── escapeRegExp.js
├── every.js
├── extend.js
├── extendWith.js
├── fill.js
├── filter.js
├── find.js
├── findIndex.js
├── findKey.js
├── findLast.js
├── findLastIndex.js
├── findLastKey.js
├── first.js
├── flatMap.js
├── flatMapDeep.js
├── flatMapDepth.js
├── flatten.js
├── flattenDeep.js
├── flattenDepth.js
├── flip.js
├── floor.js
├── flow.js
├── flowRight.js
├── forEach.js
├── forEachRight.js
├── forIn.js
├── forInRight.js
├── forOwn.js
├── forOwnRight.js
├── fp
├── fp.js
├── fromPairs.js
├── function.js
├── functions.js
├── functionsIn.js
├── get.js
├── groupBy.js
├── gt.js
├── gte.js
├── has.js
├── hasIn.js
├── head.js
├── identity.js - 返回第一个参数
├── inRange.js
├── includes.js
├── index.js
├── indexOf.js
├── initial.js
├── intersection.js
├── intersectionBy.js
├── intersectionWith.js
├── invert.js
├── invertBy.js
├── invoke.js
├── invokeMap.js
├── isArguments.js - 判断是否是arguments，基于baseIsArguments或者判断是否有callee属性
├── isArray.js - 判断是否是数组，通过Array.isArray
├── isArrayBuffer.js
├── isArrayLike.js - 判断是否类数组，有lenth且不是函数
├── isArrayLikeObject.js
├── isBoolean.js
├── isBuffer.js
├── isDate.js
├── isElement.js
├── isEmpty.js
├── isEqual.js
├── isEqualWith.js
├── isError.js
├── isFinite.js
├── isFunction.js - 判断是否是函数类型，包括async/generator/proxy等
├── isInteger.js
├── isLength.js - 校验是否可以用作length属性
├── isMap.js
├── isMatch.js
├── isMatchWith.js
├── isNaN.js
├── isNative.js
├── isNil.js
├── isNull.js
├── isNumber.js
├── isObject.js - 判断是否是对象类型，基于typeof为object或function
├── isObjectLike.js - 判断是否类对象，基于typeof为object
├── isPlainObject.js
├── isRegExp.js
├── isSafeInteger.js
├── isSet.js
├── isString.js
├── isSymbol.js - 判断是否是symbol，兼容的考虑
├── isTypedArray.js
├── isUndefined.js
├── isWeakMap.js
├── isWeakSet.js
├── iteratee.js
├── join.js
├── kebabCase.js
├── keyBy.js
├── keys.js
├── keysIn.js
├── lang.js
├── last.js
├── lastIndexOf.js
├── lodash.js
├── lodash.min.js
├── lowerCase.js
├── lowerFirst.js
├── lt.js
├── lte.js
├── map.js
├── mapKeys.js
├── mapValues.js
├── matches.js
├── matchesProperty.js
├── math.js
├── max.js
├── maxBy.js
├── mean.js
├── meanBy.js
├── memoize.js - 缓存纯函数执行结果，key为函数本身，基于MapCache.js来作为缓存
├── merge.js
├── mergeWith.js
├── method.js
├── methodOf.js
├── min.js
├── minBy.js
├── mixin.js
├── multiply.js - 调用_createMathOperation，回调为简单的*运算。
├── negate.js
├── next.js
├── noop.js - 空函数一枚
├── now.js
├── nth.js
├── nthArg.js
├── number.js
├── object.js
├── omit.js
├── omitBy.js
├── once.js
├── orderBy.js
├── over.js
├── overArgs.js
├── overEvery.js
├── overSome.js
├── package.json
├── pad.js
├── padEnd.js
├── padStart.js
├── parseInt.js
├── partial.js
├── partialRight.js
├── partition.js
├── pick.js
├── pickBy.js
├── plant.js
├── property.js
├── propertyOf.js
├── pull.js
├── pullAll.js
├── pullAllBy.js
├── pullAllWith.js
├── pullAt.js
├── random.js
├── range.js
├── rangeRight.js
├── rearg.js
├── reduce.js
├── reduceRight.js
├── reject.js
├── remove.js
├── repeat.js
├── replace.js
├── rest.js
├── result.js
├── reverse.js
├── round.js - 基于_createRound.js完成type为'round'的计算，基于Math.round递归处理小数
├── sample.js
├── sampleSize.js
├── seq.js
├── set.js
├── setWith.js
├── shuffle.js
├── size.js
├── slice.js - 基于_baseSlice.js截断数组并返回新数组
├── snakeCase.js
├── some.js
├── sortBy.js
├── sortedIndex.js
├── sortedIndexBy.js
├── sortedIndexOf.js
├── sortedLastIndex.js
├── sortedLastIndexBy.js
├── sortedLastIndexOf.js
├── sortedUniq.js - 调用_baseSortedUniq.js 来去重已排序数组
├── sortedUniqBy.js
├── split.js
├── spread.js
├── startCase.js
├── startsWith.js
├── string.js
├── stubArray.js
├── stubFalse.js
├── stubObject.js
├── stubString.js
├── stubTrue.js
├── subtract.js - 调用_createMathOperation，回调为简单的-运算。
├── sum.js
├── sumBy.js
├── tail.js
├── take.js
├── takeRight.js
├── takeRightWhile.js
├── takeWhile.js
├── tap.js
├── template.js
├── templateSettings.js
├── throttle.js
├── thru.js
├── times.js
├── toArray.js
├── toFinite.js - 转有限数字
├── toInteger.js - 转整数
├── toIterator.js
├── toJSON.js
├── toLength.js
├── toLower.js
├── toNumber.js - 转数字类型，兼容多进制
├── toPairs.js
├── toPairsIn.js
├── toPath.js
├── toPlainObject.js
├── toSafeInteger.js
├── toString.js
├── toUpper.js
├── transform.js
├── trim.js
├── trimEnd.js
├── trimStart.js
├── truncate.js
├── unary.js
├── unescape.js
├── union.js
├── unionBy.js
├── unionWith.js
├── uniq.js - 基于_baseUniq对数组去重
├── uniqBy.js
├── uniqWith.js
├── uniqueId.js
├── unset.js
├── unzip.js
├── unzipWith.js
├── update.js
├── updateWith.js
├── upperCase.js
├── upperFirst.js
├── util.js
├── value.js
├── valueOf.js
├── values.js
├── valuesIn.js
├── without.js
├── words.js
├── wrap.js
├── wrapperAt.js
├── wrapperChain.js
├── wrapperLodash.js
├── wrapperReverse.js
├── wrapperValue.js
├── xor.js
├── xorBy.js
├── xorWith.js
├── zip.js
├── zipObject.js
├── zipObjectDeep.js
└── zipWith.js
```
